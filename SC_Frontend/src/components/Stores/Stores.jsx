import { useEffect, useState } from "react";
import AllStores from "./AllStores";
import FilterStores from "./StoreFilter";
import { useQuery } from '@tanstack/react-query';
import { fetchSalons } from "../../utils/https";
import { useSelector } from "react-redux";
import { useSalons } from "../../hooks/useSalons";


export default function Stores(){
    const filters = useSelector((state)=> state.salons.filters);
    const { data, isLoading, isError, error } = useSalons(filters)

    return (
        <section className="stores">
            <FilterStores/>
            <AllStores salons={data}/>
        </section>
    )
}