import { createSlice } from "@reduxjs/toolkit";
const memorySlice = createSlice({
    name:'memories',
    initialState:{
        memories:[],
        favMemories:[],
    },
    reducers:{
        saveMemory:(state,action)=>{
            state.memories.push(action.payload);
            console.log(state.memories);
        },
        favMemory:(state,action)=>{
            if(state.favMemories.includes(action.payload)){
                return;
            }
            state.favMemories.push(action.payload);
            console.log(state.favMemories);
        }
    }

});
export const {saveMemory,favMemory} = memorySlice.actions;
export default memorySlice;