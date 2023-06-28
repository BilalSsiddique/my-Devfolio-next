import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  selectedPage: string,
};

const initialState:InitialState={
    selectedPage:'home',

}


const navBarSlice= createSlice({
    name:"navbar",
    initialState,
    reducers:{
        setSelectedPage(state,action:PayloadAction<string>){
            state.selectedPage= action.payload
        },
    }
})


export const {setSelectedPage} = navBarSlice.actions;

// selectors 
export const selectPage = (state:RootState)=> state.navbar.selectedPage


export default navBarSlice.reducer