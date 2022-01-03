import { createSlice } from "@reduxjs/toolkit";

const initialState={
    tours:[]
}
const toursSlice=createSlice({
    name:'tours-list',
    initialState:initialState,
    reducers:{
        getTours(state,action){
            state.tours.push(...action.payload)
        }
    }
})
export const toursSliceActions=toursSlice.actions
export default toursSlice.reducer