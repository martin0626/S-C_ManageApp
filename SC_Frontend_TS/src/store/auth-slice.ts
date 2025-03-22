import { createSlice } from "@reduxjs/toolkit";

type authSliceT = {
    isLoggedIn: boolean,
    userName: string,
    userEmail: string,
    userId: string,
}

const intialAuthState: authSliceT= { isLoggedIn: false, userName: '', userEmail: '', userId: ''};


const authSlice = createSlice({
    name: 'auth',
    initialState: intialAuthState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
            state.userEmail = 'Asdasd@ads';
            state.userName = 'Asdasd';
            state.userId = '11';

        },
        logout(state) {
            state = intialAuthState;
        }
    }
})


export const authActions = authSlice.actions;
export default authSlice;