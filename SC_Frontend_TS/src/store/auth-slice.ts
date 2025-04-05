import { createSlice } from "@reduxjs/toolkit";

type authSliceT = {
    isLoggedIn: boolean,
    userName: string,
    userEmail: string,
}

const intialAuthState: authSliceT= { isLoggedIn: false, userName: '', userEmail: ''};


const authSlice = createSlice({
    name: 'auth',
    initialState: intialAuthState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.userEmail = action.payload.email;
            state.userName = action.payload.name;
        },
        logout(state) {
            state.userName = '';
            state.userEmail = '';
            state.isLoggedIn = false;
        }
    }
})


export const authActions = authSlice.actions;
export default authSlice;