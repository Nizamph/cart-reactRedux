import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart-Slice'

const store = configureStore({
  reducer:cartReducer
})

export default store;