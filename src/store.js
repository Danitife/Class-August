import {configureStore} from "@reduxjs/toolkit"
// import { globalNum } from "./Redux/NumSlice"
import globalNum from "./Redux/NumSlice"
import PostBlog from "./Redux/PostSlice"
import UserSlice from "./Redux/UserSlice"

export const store = configureStore({
    reducer: {globalNum, PostBlog, UserSlice}
})