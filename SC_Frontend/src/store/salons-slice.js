import { createSlice } from '@reduxjs/toolkit';


const initialFilters = {search: '', filter: '', sort: '', city: [], services: []};

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