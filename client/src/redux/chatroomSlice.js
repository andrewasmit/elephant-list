import { createSlice } from '@reduxjs/toolkit'

export const chatroomSlice = createSlice({
    name: 'chatroom',
    initialState: {
        targetChat: null
    },
    reducers: {
        addTargetChat: (state, action)=>{ 
            console.log("Redux: Targeting chatroom")
            state.targetChat = action.payload;
        },
        clearTargetChat: (state)=>{ 
            console.log("Redux: Clearing target chatroom")
            state.targetChat = null;
        }
    }
});

export const { addTargetChat, clearTargetChat } = chatroomSlice.actions; 
export default chatroomSlice.reducer;