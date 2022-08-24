import './navigation.styles.scss';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <div>Kon's Clothing</div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutAuthUser}>
              Sign Out
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
