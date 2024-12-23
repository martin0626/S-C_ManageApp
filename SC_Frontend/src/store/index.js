import { configureStore } from '@reduxjs/toolkit';
import salonsSlice from './salons-slice';
import uiSlice from './ui-slice';


const store = configureStore({
    reducer: { 
        salons:  salonsSlice.reducer, 
        ui: uiSlice.reducer
    },
});


export default store;   