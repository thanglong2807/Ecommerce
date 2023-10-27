import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

export const globalStore = createSlice({
    name: 'globalStore',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const { } = globalStore.actions

export default globalStore.reducer