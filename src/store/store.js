import { configureStore } from "@reduxjs/toolkit";
import MemorySlice from './memorySlice'

export const store = configureStore({
    reducer:{
        memories: MemorySlice.reducer,
    }
})
