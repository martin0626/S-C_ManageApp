import { createSlice } from '@reduxjs/toolkit';

export type ServicesSliceStateT = {
    selectedServices: string [],
}


const initialServices: ServicesSliceStateT = {selectedServices: []};

const servicesSlice = createSlice({
    name: 'services',
    initialState: initialServices,
    reducers: {
        setServices(state, action) {
            state.selectedServices.push(action.payload)
        },
        resetServices(state) {
            state.selectedServices = [];
        },
    }
})


export const servicesActions = servicesSlice.actions;

export default servicesSlice;