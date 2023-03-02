import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name:"ui",
  initialState:{cartShow:false},
  reducers:{
    cartToggle:(state) => {
       state.cartShow = !state.cartShow
    },
  }
})

export default uiSlice.reducer;

export const uiActions = uiSlice.actions