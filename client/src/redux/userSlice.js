import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        chatrooms: [],
        reviews: []
    },
    reducers: {
        login: (state, action)=>{ 
            console.log("Redux: Logging in...")
            state.user = action.payload;
            state.chatrooms = action.payload.all_chatrooms;
            state.reviews = action.payload.reviews;
        },
        logout: state=>{ 
            console.log("Redux: Logging out...")
            state.user = null;
            state.chatrooms = [];
            state.reviews = [];
        },
        addMessage: (state, action)=>{
            console.log("Redux: adding message to chatroom", action.payload)
            const idx = state.chatrooms.findIndex(chatroom=>chatroom[0].chatroom_id === action.payload.chatroom_id)
            state.chatrooms[idx].push(action.payload)
            state.chatrooms = state.chatrooms
        }
    }
})

export const { login, logout, addMessage } = userSlice.actions; 
export default userSlice.reducer;