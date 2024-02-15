import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    avatar: 'a.png',
    name: 'Harry'
}
const userSlice = createSlice({
    name: 'profile',
    initialState,
    reducers:{
    }
});

export const userReducer = userSlice.reducer