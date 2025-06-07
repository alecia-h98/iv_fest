import { NavLink } from 'react-router-dom';
import useStore from '../../zustand/store';
import { useNavigate } from 'react-router-dom';
import { Drawer, CloseButton, Portal } from '@chakra-ui/react';
import burgerMenu from './hburgerMenu.png';
import './Nav.css';

function Nav() {
  const user = useStore((store) => store.user);
  const logOut = useStore((state) => state.logOut);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate('/login'); // Redirect to login page after logging out
  }


  return (
    <Drawer.Root>
      <Drawer.Trigger>
        <img src={burgerMenu}/>
      </Drawer.Trigger>
    <Portal>
      <Drawer.Backdrop />
      <Drawer.Positioner>
      <Drawer.Content>
      <nav>
        <Drawer.Header>
        </Drawer.Header>
      <ul>
      { // User is not logged in, render these links:
        !user.id && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/registration">Register</NavLink>
            </li>
          </>
        )
      }
      { // User is logged in, render these links:
        user.id && (
          <>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <button onClick={handleLogOut}>Logout</button>
            </li>
          </>
        )
      }
      {/* Show these links regardless of auth status: */}
        <li>
          {/* */}
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
    </Drawer.Content>
    </Drawer.Positioner>
    </Portal>
    </Drawer.Root>
  );
}


export default Nav;
