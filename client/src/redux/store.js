import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import postReducer from './postSlice'
import errorReducer from './errorSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        posts: postReducer,
        errors: errorReducer
    }
}); 