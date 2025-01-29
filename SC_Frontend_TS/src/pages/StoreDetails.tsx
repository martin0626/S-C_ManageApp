import { useQuery } from "@tanstack/react-query";
import { redirect, useNavigate, useParams } from "react-router";
import { fetchSingelSalon } from "../utils/https";
import Details from "../components/StoreDetails/Details";
import Stores from "../components/Stores/Stores";
import StoresPage from "./Stores";

export default function StoreDetails(){

    const { slug } = useParams();
    const navigate = useNavigate();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['salons', {slug: slug}],
        queryFn: ({signal}) => slug ? fetchSingelSalon({ signal, slug }) : Promise.reject("Slug is undefined"),
    })

    if(!data && !isLoading){
        navigate('/stores')
    }


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