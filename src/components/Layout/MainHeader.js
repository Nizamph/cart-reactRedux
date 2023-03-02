import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { uiActions } from '../Redux-store/ui-slice';
const MainHeader = (props) => {

  const dispatch = useDispatch()

  const onToggleCartHandler = () => {
    dispatch(uiActions.cartToggle())
  }
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton onToggle={onToggleCartHandler} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
