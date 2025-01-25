import { useQuery } from '@tanstack/react-query';
import { fetchSalons } from '../utils/https';

export const useSalons = (filters) => {
    //handle all filters...!
    let queries = Object.keys(filters)
        .filter(key=> filters[key] != '')
        .map(key => `${key}=${filters[key]}`)
        .join('&');

        
     return useQuery({
            queryKey: ['salons', {name: queries}],
            queryFn: ({signal}) => fetchSalons({signal, queries}),
    });

};