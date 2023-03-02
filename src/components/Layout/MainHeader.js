import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from '../Redux-store/cart-Slice';
const MainHeader = (props) => {
  const showCart = useSelector(state => state.cartShow)
  const dispatch = useDispatch()
  const onShowCartHandler = () => {
    dispatch(cartActions.cartShow(true))
  }
  const onCloseCartHandler = () => {
    dispatch(cartActions.cartShow(false))
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            {showCart?<CartButton onShow={onCloseCartHandler} />:<CartButton onShow={onShowCartHandler} />}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
