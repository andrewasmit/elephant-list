import { createSlice } from '@reduxjs/toolkit'

export const errorSlice = createSlice({
    name: 'error',
    initialState: {
        errors: []
    },
    reducers: {
        addErrors: (state, action)=>{ 
            console.log("Redux: Adding errors from server")
            state.errors = [...state.errors, action.payload];
        },
        clearErrors: (state)=>{ 
            console.log("Redux: Clearing the errors")
            state.errors = [];
        }
    }
});

export const { addErrors, clearErrors } = errorSlice.actions; 
export default errorSlice.reducer;