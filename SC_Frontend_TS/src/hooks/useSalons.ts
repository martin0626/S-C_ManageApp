import { useQuery } from '@tanstack/react-query';
import { SalonsSliceStateT } from '../store/salons-slice';
import { fetchSalons } from '../utils/https';

export const useSalons = (filters: SalonsSliceStateT) => {
    //handle all filters...!
    let queries = Object.keys(filters)
        .filter(key=> filters[key as keyof SalonsSliceStateT] != '')
        .map(key => `${key}=${filters[key as keyof SalonsSliceStateT]}`)
        .join('&');

        
     return useQuery({
            queryKey: ['salons', {name: queries}],
            queryFn: ({signal}) => fetchSalons({signal, queries}),
    });

};