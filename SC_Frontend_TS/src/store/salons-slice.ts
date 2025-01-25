import { createSlice } from '@reduxjs/toolkit';

export type SalonsSliceStateT = {
    search: string,
    filter: string,
    sort: string,
    city: string [],
    services: string [],
}


const initialFilters: SalonsSliceStateT = {search: "", filter: "", sort: "", city: [], services: []};

const salonsSlice = createSlice({
    name: 'salons',
    initialState: { 
        filters: initialFilters, 
    },
    reducers: {
        setFilters(state, action) {
            state.filters = action.payload;
        },
        resetFilters(state) {
            state.filters = initialFilters;
        },
    }
})


export const salonActions = salonsSlice.actions;

export default salonsSlice;