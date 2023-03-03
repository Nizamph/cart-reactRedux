import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
const CartButton = (props) => {
  const cartQuantiy = useSelector(state => state.cart.totalQuantity)
  return (
    <button className={classes.button} onClick={props.onToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantiy}</span>
    </button>
  );
};

export default CartButton;
