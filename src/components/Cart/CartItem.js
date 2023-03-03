import classes from './CartItem.module.css';
import React from 'react';
import { cartAction } from '../Redux-store/cart-slice';
import { useSelector,useDispatch } from 'react-redux';
const CartItem = (props) => {
  const {title, price, quantity,id, total} = props.items
  const dispatch = useDispatch()

  const quantityIncreaseHandler = () => {
    dispatch(cartAction.addToCart(    {
      id,
      title,
      price
    }))
  }

  const quantityDecreaseHandler = () => {
     dispatch(cartAction.removeFromCart(
     id
     ))
  }
  return (
   <React.Fragment>
    {
   
        <li className={classes.item} >
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>
            ${total.toFixed(2)}{' '}
            <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={quantityDecreaseHandler}>-</button>
            <button onClick={quantityIncreaseHandler}>+</button>
          </div>
        </div>
      </li>
    }
    </React.Fragment>
  );
};

export default CartItem;
