import { uiActions } from "./ui-slice"
import { cartAction } from "./cart-slice"
export const fetchCartData = () => {
  return async(dispatch) => {
    const fetchData = async () => {
     const response = await fetch('https://redux-cart-5ec29-default-rtdb.firebaseio.com/cart.json')


     if(!response.ok) {
       throw new Error("failed to fetch datas from the backend")
     }

     const data = await response.json()

     return data
    }
    try {
     const cartData = await fetchData();
     dispatch(cartAction.replaceCart(cartData))
    }catch(error){
      dispatch(
        uiActions.showNotification({status:'error',title:'error',message:'fetching cart data failed'})
      )
    }
  }
}


export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status:'pending',
        title:'Sending',
        message:'sending Cart data'
      })
    )
  
    const sendRequest = async () => {
      const response = await fetch('https://redux-cart-5ec29-default-rtdb.firebaseio.com/cart.json',{
        method: 'PUT',
        body: JSON.stringify(cart),
  
      })
      if(!response.ok) {
        throw new Error('failed to add the cart')
      }
    }
   
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title:'Success!!',
          message:'send cart data successfully'
        })
      )
    }catch(error) {
      dispatch(
        uiActions.showNotification({status:'error',title:'error',message:'failed to send the cart'})
      )
    }
  }
}