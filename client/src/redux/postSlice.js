import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: []
    },
    reducers: {
        fetchPosts: (state, action)=>{ 
            "Initial fetch of posts..."
            state.posts = action.payload;
        },
        addNewPost: (state, action)=>{ 
            "Adding new post!"
            state.posts = [...state.posts, action.payload];
        }
    }
});

export const { fetchPosts, addNewPost } = postSlice.actions; 
export default postSlice.reducer;