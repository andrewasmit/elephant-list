import { createSlice } from '@reduxjs/toolkit'

export const chatroomSlice = createSlice({
    name: 'chatroom',
    initialState: {
        targetChat: null,
        targetUsername: null
    },
    reducers: {
        addTargetChat: (state, action)=>{ 
            // console.log("Redux: Targeting chatroom")
            state.targetChat = action.payload;
        },
        clearTargetChat: (state)=>{ 
            // console.log("Redux: Clearing target chatroom")
            state.targetChat = null;
        },
        addTargetUsername: (state, action)=>{
            // console.log("Redux: adding target username")
            state.targetUsername = action.payload
        },
        clearTargetUsername: state=>{
            // console.log("Redux: clearing target username")
            state.targetUsername = null
        }
    }
});

export const { addTargetChat, clearTargetChat, addTargetUsername, clearTargetUsername } = chatroomSlice.actions; 
export default chatroomSlice.reducer;