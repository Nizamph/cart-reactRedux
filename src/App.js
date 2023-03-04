import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import React,{ useEffect } from 'react';
import { uiActions } from './components/Redux-store/ui-slice';
import Notification from './components/UI/Notification';

let isInitial = true;
function App() {
  const onShow = useSelector(state => state.ui.cartShow)
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()
  useEffect(() => {
    const sendCartData = async() => {
      dispatch(
        uiActions.showNotification({status:'',title:'Loading',message:'sending Cart data'})
      )
      try{
        const response = await fetch('https://redux-cart-5ec29-default-rtdb.firebaseio.com/cart.json',{
          method: 'PUT',
          body: JSON.stringify(cart),
    
        })
        if(response.ok) {
          dispatch(uiActions.showNotification({status:'success',title:'Success',message:'successfully added the cart'}))
        }else {
          throw new Error('failed to add the cart')
        }
      }catch(err) {
        dispatch(
          uiActions.showNotification({status:'error',title:'Failed',message:err.message})
        )
      }
    }
    if(isInitial) {
      isInitial = false
      return
    }
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({status:'failed',title:'Failed',message:'failed to add the cart'})
      )
    })
  },[cart,dispatch]);
  return (
    <React.Fragment>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    <Layout>
      {onShow && <Cart />}
      <Products />
    </Layout>
    </React.Fragment>
  );
}

export default App;
