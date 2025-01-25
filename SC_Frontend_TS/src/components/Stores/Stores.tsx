import AllStores from "./AllStores";
import FilterStores from "./StoreFilter";
import { useSelector } from "react-redux";
import { useSalons } from "../../hooks/useSalons";
import LoadingComp from "../UI/Loading";
import ErrorBox from "../UI/ErrorBox";



export default function Stores(){
    const filters = useSelector((state)=> state.salons.filters);
    const { data, isLoading, isError, error } = useSalons(filters);

    let salonsContent = isError ? <ErrorBox err={error}/> : <AllStores salons={data}/>

    return (
        <section className="stores">
            <FilterStores/>
            {
                isLoading
                    ?
                <LoadingComp/>
                    :
                salonsContent
            }
        </section>
    )
}