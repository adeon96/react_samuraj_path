import React from 'react';
import styles from './UserItem.module.css';
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.user__item}>
      <img src={props.image === undefined ?
        'https://mypower.in.ua/wp-content/uploads/placeholder-300x200.png' :
        props.image} alt="ava" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

export default UserItem;