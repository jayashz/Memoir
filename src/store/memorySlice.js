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
        removeMemory:(state,action)=>{
            const delId = action.payload;
            state.memories = state.memories.filter((item)=> item.id != delId);
        },
        favMemory:(state,action)=>{
            if(state.favMemories.includes(action.payload)){
                return;
            }
            state.favMemories.push(action.payload);
        },
        removeFav:(state,action)=>{
            state.favMemories = state.favMemories.filter((item)=> item != action.payload);
        }
    }

});
export const {saveMemory, removeMemory, favMemory, removeFav} = memorySlice.actions;
export default memorySlice;