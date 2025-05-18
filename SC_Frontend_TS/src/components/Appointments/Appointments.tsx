import { useQueries } from "@tanstack/react-query";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { servicesActions } from "../../store/services-slice";
import LoadingComp from "../UI/Loading";

export default function AppointmentsComp(){
    const services = useAppSelector(state => state.services.selectedServices);
    const dispatch = useAppDispatch();
    
    
    const serviceQueries = useQueries({
        queries: Object.keys(services).map((slug) => ({
            queryKey: ['service', slug],
            queryFn: async ()=>{
                const req = await fetch('http://localhost:3000/subServices/serviceBySalon/' + slug, {
                    method: 'POST',
                    headers:{
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        "services": services[slug]
                    })
                });

                const res = await req.json();
                return res;
            }
        })),
    })


    // Derived state
    const isLoading = serviceQueries.some((query) => query.isLoading);
    const isError = serviceQueries.some((query) => query.isError);
    const data = serviceQueries.map((query) => query.data).filter(Boolean);

    debugger

    const handleClear =  ()=>{
        dispatch(servicesActions.resetServices());
    };


    if (isError) return <div style={{textAlign: 'center'}}><LoadingComp/></div>
    if (isLoading) return <div style={{textAlign: 'center'}}><LoadingComp/></div>

    return (
        <div>
            { data.length > 0 ? data.map(e => {
                return <h2>{e.services[1].name}</h2>
            }) : <h1>No Selected Services Yet</h1>}
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}