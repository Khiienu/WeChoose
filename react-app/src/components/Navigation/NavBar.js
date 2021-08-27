import './navbar.css'
import React from 'react';
// import  ReactDOM  from 'react-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import DemoUser from '../Demo/index';

const NavBar = ({ isLoaded }) => {
  const user = useSelector((state) => state.session.user);

  let sessionlinks;
  if (user) {
    sessionlinks = (
      <div className="navbar">
        <h1 className="homeTitle">We Choose</h1>
        <NavLink className="navHome" to='/' exact={true} activeClassName='active'>
        </NavLink>
        <NavLink className="navProfile" to="/decks" exact={true} activeClassName="active">Decks</NavLink>
        <div className="navLogout">
          <LogoutButton />
        </div>
      </div>
    )
  } else {
    sessionlinks = (
      <div className="navbar">
        <h1 className="homeTitle">WeChoose</h1>
        <NavLink className="navHome" to='/splash' exact={true} activeClassName='active'>
        </NavLink>
        <NavLink className="navLogin" to='/login' exact={true} activeClassName='active'>Login</NavLink>
        <NavLink className="navSignup" to='/sign-up' exact={true} activeClassName='active'>Sign Up</NavLink>
        <div className="navDemo">
          <DemoUser />
        </div>
      </div>
    )
  }
  return (
    <>
      {sessionlinks}
    </>
  )
}
export default NavBar;
