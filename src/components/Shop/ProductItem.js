import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartAction } from '../Redux-store/cart-slice';
import { useDispatch, useSelector } from 'react-redux';
const ProductItem = (props) => {

  const { title, price, description,id } = props;
  const dispatch = useDispatch()
  // const quantity = useSelector(state => state.cart.quantity)

  const addToCartHandler = () => {
      dispatch(cartAction.addToCart({title:title,price:price,id:id}))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
