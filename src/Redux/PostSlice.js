import { createSlice } from "@reduxjs/toolkit";

const PostBlog = createSlice({
    name: "Post Slice",
    initialState: {
        fetchingPost: false,
        post: [],
        fetchErr: ""
    },
    reducers: {
        fetchStart: (state)=>{
            state.fetchingPost = true;
            state.post = [];
            state.fetchErr = "";
        },
        fetchSuccess:(state, action)=>{
            state.fetchingPost = false;
            state.post = action.payload;
            state.fetchErr = "";
        },
        fetchFailed: (state, action)=>{
            state.fetchingPost = false;
            state.post = [];
            state.fetchErr = action.payload;
        }
    }
})

export const {fetchStart, fetchSuccess, fetchFailed} = PostBlog.actions
export default PostBlog.reducer