import React from 'react';
import styles from './UserItem.module.css';
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={styles.user__item}>
      <img src="https://eng.mnogonotka.com/wp-content/uploads/2019/12/elman-leti-in.jpg" alt="ava" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
}

export default UserItem;