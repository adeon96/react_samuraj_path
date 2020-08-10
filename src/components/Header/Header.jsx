import React from 'react';
import styles from './Header.module.css';
import Preloader from './../common/Preloader';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

  const onLogout = () => {
    props.logoutUser();
  }

  return (<div className={styles.header}>

    {props.isFetching ? <Preloader /> : ''}

    <header>
      <h4>Welcome to our network!</h4>

      {props.isAuth ?
        <div>
          <p>{props.userLogin}</p> 
          <button onClick={onLogout}>Logout</button>
        </div>

        :

        <NavLink to='/login'>Login</NavLink> }
      
    </header>
  </div>);
}

export default Header;