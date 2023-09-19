import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
    name: "USer",
    initialState: {
        isFetching: false,
        currUser: null,
        fetchEr : ""
    },
    reducers: {
        fectStart: (state)=>{
            state.isFetching = true;
            state.currUser = null;
            state.fetchEr = ""
        },
        gottenUser: (state, action)=>{
            state.isFetching = false;
            state.currUser = action.payload;
            state.fetchEr = ""
        },
        userFailed: (state, action)=>{
            state.isFetching = false;
            state.currUser = null;
            state.fetchEr = action.payload
        }
    }
})

export const {fectStart, gottenUser, userFailed} = User.actions
export default User.reducer