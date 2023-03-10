import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name:"cart",
  initialState:{items:[], totalQuantity:0, totalAmount:0},
  reducers: {
    replaceCart(state, action) {
    state.totalQuantity = action.payload.totalQuantity;
    state.items = action.payload.items;
    },
   addToCart:(state,action) => {
    const newItem = action.payload;
    const existingItem = state.items.find(item => item.id === newItem.id)
    state.totalQuantity++
    if(!existingItem) {
      state.items.push({
        title:newItem.title,
        id:newItem.id, 
        price:newItem.price,
        quantity:1,
        totalPrice:newItem.price
      })
    } else {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.totalPrice + newItem.price
    }
   },
   removeFromCart:(state,action) => {
   const id = action.payload;
   state.totalQuantity--;
   const existingItem = state.items.find((item) => item.id === id);
   if(existingItem.quantity === 1) {
    state.items = state.items.filter(item => item.id !== id)
   } else {
    existingItem.quantity--;
    existingItem.totalPrice = existingItem.totalPrice - existingItem.price;

   }

   }
  }
})



export default cartSlice.reducer;
export const cartAction = cartSlice.actions