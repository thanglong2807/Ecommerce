import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const globalStore = createSlice({
    name: 'globalStore',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = globalStore.actions

export default globalStore.reducer