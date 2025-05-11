import { createSlice } from '@reduxjs/toolkit';

export type ServicesSliceStateT = {
  selectedServices: {
    [salon: string]: string []; // or a specific type instead of `any`
  };
}



// Load initial state from localStorage
const loadInitialSelectedServices = (): ServicesSliceStateT["selectedServices"] => {
  try {
    const data = localStorage.getItem("selectedServices");
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error("Failed to load from localStorage:", e);
    return {};
  }
};




const initialServices: ServicesSliceStateT = {selectedServices: loadInitialSelectedServices()};

const servicesSlice = createSlice({
    name: 'services',
    initialState: initialServices,
    reducers: {
        setServices(state, action) {
            if(state.selectedServices[action.payload.salon]){
                state.selectedServices[action.payload.salon].push(action.payload.id)
            }else{
                state.selectedServices[action.payload.salon] = [action.payload.id];
            }
        },
        removeService(state, action){
            if(state.selectedServices[action.payload.salon]){
                state.selectedServices[action.payload.salon] = state.selectedServices[action.payload.salon].filter(e => e != action.payload.id);
            }
        },
        resetServices(state) {
            state.selectedServices = {};
        },
    }
})


export const servicesActions = servicesSlice.actions;

export default servicesSlice;