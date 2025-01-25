import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import salonsSlice from "./salons-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        salons: salonsSlice.reducer,
    }
})


export default store;