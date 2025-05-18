import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '../utils/https';
import { ServicesSliceStateT } from '../store/services-slice';

export const useSalons = (appointments: ServicesSliceStateT) => {
    //handle all filters...!

    const id = 'asd'
        
    return useQuery({
        queryKey: ['appointments'],
        queryFn: ({signal}) => fetchServices({signal, id}),
    });

};