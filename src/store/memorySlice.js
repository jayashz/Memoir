import { createSlice } from "@reduxjs/toolkit";
const memorySlice = createSlice({
    name:'memories',
    initialState:{
        memories:[]
    },
    reducers:{
        saveMemory:(state,action)=>{
            state.memories.push(action.payload);
        }
    }

});
export const {saveMemory} = memorySlice.actions;
export default memorySlice;