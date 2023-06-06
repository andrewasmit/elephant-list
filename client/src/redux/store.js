import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import postReducer from './postSlice'
import errorReducer from './errorSlice';
import chatroomReducer from './chatroomSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        posts: postReducer,
        errors: errorReducer,
        chatroom: chatroomReducer
    }
}); 