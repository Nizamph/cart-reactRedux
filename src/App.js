import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector,useDispatch } from 'react-redux';
import React,{ useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './components/Redux-store/cart-actions';
let isInitial = true;
function App() {
  const onShow = useSelector(state => state.ui.cartShow)
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
  },[])
  useEffect(() => {
   if(isInitial) {
    isInitial = false;
    return;
   }

   dispatch(sendCartData(cart))
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
