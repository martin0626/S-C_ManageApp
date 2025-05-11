import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import salonsSlice from "./salons-slice";
import authSlice from "./auth-slice";
import servicesSlice from "./services-slice";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        salons: salonsSlice.reducer,
        auth: authSlice.reducer,
        services: servicesSlice.reducer,
    },
})


export default store;

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
