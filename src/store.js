import {configureStore} from "@reduxjs/toolkit"
// import { globalNum } from "./Redux/NumSlice"
import globalNum from "./Redux/NumSlice"

export const store = configureStore({
    reducer: {globalNum}
})