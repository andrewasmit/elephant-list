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
            console.log("Redux: adding message to chat")
            const idx = state.chatrooms.findIndex(chatroom=>chatroom[0].chatroom_id === action.payload.chatroom_id)
            state.chatrooms[idx].push(action.payload)
            state.chatrooms = state.chatrooms
        },
        deleteMessage: (state, action)=>{
            console.log("Redux: Deleting message from chat")
            const chatroom = state.chatrooms.filter(cr=> cr[0].chatroom_id === action.payload[0])[0]
            const idx = chatroom.findIndex(msg=>msg.id === action.payload[1])
            chatroom.splice(idx, 1)
            state.chatrooms = state.chatrooms
        },
        editMessage: (state, action)=>{
            console.log("Redux: Editing message");
            const chatroom = state.chatrooms.filter(cr=> cr[0].chatroom_id === action.payload[0])[0]
            const idx = chatroom.findIndex(msg=>msg.id === action.payload[1].id)
            chatroom.splice(idx, 1, action.payload[1])
            state.chatrooms = state.chatrooms
        },
        startChatroom: (state, action) =>{
            console.log("Redux: Creating a chatroom")
            state.chatrooms = [...state.chatrooms, action.payload]
        }
    }
})

export const { login, logout, addMessage, deleteMessage, editMessage, startChatroom } = userSlice.actions; 
export default userSlice.reducer;