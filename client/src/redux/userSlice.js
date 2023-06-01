import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action)=>{ 
            console.log("Logging in...")
            state.user = action.payload;
        },
        logout: state=>{ 
            console.log("Logging out...")
            state.user = null;
        }
    }
})

export const { login, logout } = userSlice.actions; 
export default userSlice.reducer;