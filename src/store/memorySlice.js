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

        },
        favMemory:(state,action)=>{
            if(state.favMemories.includes(action.payload)){
                return;
            }
            state.favMemories.push(action.payload);

        },
        removeFav:(state,action)=>{

        }
    }

});
export const {saveMemory,favMemory} = memorySlice.actions;
export default memorySlice;