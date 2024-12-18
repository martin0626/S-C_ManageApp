import { createSlice } from '@reduxjs/toolkit';



const uiSlice = createSlice({
    name: 'ui',
    initialState: { 
        menuIsOpen: false, 
    },
    reducers: {
        openMenu(state){
            state.menuIsOpen = true;
        },
        closeMenu(state){
            state.menuIsOpen = false;
        }
    }
})


export const uiActions = uiSlice.actions;

export default uiSlice;