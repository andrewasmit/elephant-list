import { createSlice } from '@reduxjs/toolkit'

export const chatroomSlice = createSlice({
    name: 'chatroom',
    initialState: {
        targetChat: null,
        recipientUser: null
    },
    reducers: {
        addTargetChat: (state, action)=>{ 
            console.log("Redux: Targeting chatroom")
            state.targetChat = action.payload;
        },
        clearTargetChat: (state)=>{ 
            console.log("Redux: Clearing target chatroom")
            state.targetChat = null;
        },
        addRecipientUser: (state, action)=>{
            state.recipientUser = action.payload
        }
    }
});

export const { addTargetChat, clearTargetChat, addRecipientUser } = chatroomSlice.actions; 
export default chatroomSlice.reducer;