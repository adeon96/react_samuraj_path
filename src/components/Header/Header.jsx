import React from 'react';
import styles from './Header.module.css';
import Preloader from './../commom/Preloader';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (<div className={styles.header}>

    {props.isFetching ? <Preloader /> : ''}

    <header>
      <h4>Welcome to our network!</h4>

      {props.isAuth ? <p>{props.userLogin}</p> : 
        <NavLink to='/login'>Login</NavLink> }
      
    </header>
  </div>);
}

export default Header;