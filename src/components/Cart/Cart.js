import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector,useDispatch } from 'react-redux';
import { cartAction } from '../Redux-store/cart-slice';
const Cart = (props) => {
  const onShow = useSelector(state => state.ui.cartShow)
  const cartItems = useSelector(state => state.cart.items)

  console.log(onShow)

  console.log(cartItems)
  return (
    <div>
      <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
           <CartItem
           key={item.id}
           items={{
            id:item.id,
            title: item.title,
            quantity: item.quantity,
            total: item.totalPrice,
            price: item.price
           }}
          />
        ))}
      </ul>
    </Card>
    
    </div>
  );
};

export default Cart;
