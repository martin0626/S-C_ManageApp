import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchSingelSalon } from "../utils/https";
import Details from "../components/StoreDetails/Details";

export default function StoreDetails(){

    const { slug } = useParams();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['salons', {slug: slug}],
        queryFn: ({signal}) => fetchSingelSalon({signal, slug}),
    })
    
    

    return (
        <section>
        {
            isLoading 
            ?
            <h1>Loading</h1>
            :
            <Details salon={data}/>
        }
        </section>
    )
}