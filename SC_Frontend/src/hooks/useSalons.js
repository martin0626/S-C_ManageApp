import { useQuery } from '@tanstack/react-query';
import { fetchSalons } from '../utils/https';

export const useSalons = (filters) => {
    const  searchedName = filters.search;
    //TODO handle all filters...!

     return useQuery({
            queryKey: ['salons', {name: searchedName}],
            queryFn: ({signal}) => fetchSalons({signal, searchedName}),
    });

    // const { data, isLoading, isError, error }
};