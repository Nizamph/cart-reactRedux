import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name:"ui",
  initialState:{cartShow:false,notification: null},
  reducers:{
    cartToggle:(state) => {
       state.cartShow = !state.cartShow
    },
    showNotification(state, action) {
      state.notification = {status: action.payload.status, title: action.payload.title, message:action.payload.message}
    }
  }
})

export default uiSlice.reducer;

export const uiActions = uiSlice.actions