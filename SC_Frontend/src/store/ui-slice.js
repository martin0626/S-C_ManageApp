import { createSlice } from '@reduxjs/toolkit';



const uiSlice = createSlice({
    name: 'ui',
    initialState: { 
        menuIsOpen: false,
        menuComponent: undefined,
    },
    reducers: {
        openMenu(state, action){
            state.menuIsOpen = true;
            state.menuComponent = action.payload.comp;
        },
        closeMenu(state){
            state.menuIsOpen = false;
            state.menuComponent = undefined;

        }
    }
})


export const uiActions = uiSlice.actions;

export default uiSlice;