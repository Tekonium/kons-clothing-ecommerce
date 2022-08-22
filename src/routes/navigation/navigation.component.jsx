import './navigation.styles.scss';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../../contexts/user.context';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
