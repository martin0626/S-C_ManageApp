import { configureStore } from '@reduxjs/toolkit';
import salonsSlice from './salons-slice';


const store = configureStore({
    reducer: { salons:  salonsSlice.reducer},
});


export default store;