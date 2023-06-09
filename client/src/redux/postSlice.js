import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: []
    },
    reducers: {
        fetchPosts: (state, action)=>{ 
            "Redux: Initial fetch of posts..."
            state.posts = action.payload;
        },
        addNewPost: (state, action)=>{ 
            "Redux: Adding new post!"
            state.posts = [action.payload, ...state.posts];
        },
        addDonationToPost: (state, action)=>{
            "Redux: Adding the donation ID to post"
            const oldState = [...state.posts]
            const idx = oldState.findIndex(p=>p.id === action.payload.post_id)
            const targetPost = oldState[idx]
            console.log("Target post: ", targetPost)
            targetPost.donation_id = action.payload.id
            oldState.splice(idx, 1, targetPost)
            state.posts = oldState
        }
    }
});

export const { fetchPosts, addNewPost, addDonationToPost } = postSlice.actions; 
export default postSlice.reducer;