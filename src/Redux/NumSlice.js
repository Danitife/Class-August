import { createSlice } from "@reduxjs/toolkit";

export const globalNum = createSlice({
    name: "Global Number",
    initialState: {
        num: 2
    },
    reducers: {
        increase: (state)=>{
            state.num += 1
        }
    }
})

export default globalNum.reducer;
export const {increase} = globalNum.actions