import { useEffect, useState } from "react";
import AllStores from "./AllStores";
import FilterStores from "./StoreFilter";
import { useQuery } from '@tanstack/react-query';
import { fetchSalons } from "../../utils/https";


export default function Stores(){
    const [ searchedName, setSearchedName ] = useState('')
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['salons', {name: searchedName}],
        queryFn: ({signal}) => fetchSalons({signal, searchedName}),
    })

    

    return (
        <section className="stores">
            <FilterStores/>
            <AllStores salons={data}/>
        </section>
    )
}