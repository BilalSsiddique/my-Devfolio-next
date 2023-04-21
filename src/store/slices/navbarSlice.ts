import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  selectedPage: string,
  isTopOfPage:boolean,
};

const initialState:InitialState={
    selectedPage:'home',
    isTopOfPage: true,
}


const navBarSlice= createSlice({
    name:"navbar",
    initialState,
    reducers:{
        setSelectedPage(state,action:PayloadAction<string>){
            state.selectedPage= action.payload
        },
        setisTopOfPage(state,action:PayloadAction<boolean>){
            state.isTopOfPage = action.payload
        }
    }
})


export const {setSelectedPage,setisTopOfPage} = navBarSlice.actions;

// selectors 
export const selectPage = (state:RootState)=> state.navbar.selectedPage
export const isTopPage = (state:RootState)=> state.navbar.isTopOfPage

export default navBarSlice.reducer