import { createSlice } from "@reduxjs/toolkit";



type MenuComponentType = 'city' | 'service' | 'sort' | 'appoints' | '';

interface UIState {
    menuIsOpen: boolean;
    menuComponent: MenuComponentType;
    isLoading: boolean;
}

// Step 2: Create the slice
const initialState: UIState = {
    menuIsOpen: false,
    menuComponent: '',
    isLoading: false,
};




const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        openMenu(state, action: {payload : {comp: 'city' | 'service' | 'sort' | 'appoints' | ''}}){
            state.menuIsOpen = true;
            state.menuComponent = action.payload.comp;
        },
        closeMenu(state){
            state.menuIsOpen = false;
            state.menuComponent = '';
        },
        setIsLoading(state){
            state.isLoading = true;
        },
        clearIsLoading(state){
            state.isLoading = false;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;