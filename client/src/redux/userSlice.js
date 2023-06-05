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
        }
    }
})

export const { login, logout } = userSlice.actions; 
export default userSlice.reducer;