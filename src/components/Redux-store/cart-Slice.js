import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name:"cart",
  initialState:{cartShow:false},
  reducers:{
    cartShow:(state,action) => {
       state.cartShow = action.payload
    },
  }
})

export default cartSlice.reducer;

export const cartActions = cartSlice.actions