import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action)=>{ 
            console.log("Redux: Logging in...")
            state.user = action.payload;
        },
        logout: state=>{ 
            console.log("Redux: Logging out...")
            state.user = null;
        },
        addMessage: (state, action)=>{
            console.log("Redux: adding message to chatroom")
            state.user.all_chatrooms = [...state.user.all_chatrooms].filter(chatroom=>chatroom[0].chatroom_id === action.payload.chatroom_id).push(action.payload)
            // newChatroom = [...targetChatroom]
            // console.log(newChatroom)
        }
    }
})

export const { login, logout, addMessage } = userSlice.actions; 
export default userSlice.reducer;