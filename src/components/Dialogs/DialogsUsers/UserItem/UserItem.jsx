import React from 'react';
import styles from './UserItem.module.css';

const UserItem = (props) => {
  return (
    <div className={styles.user__item}>
      <img src="https://eng.mnogonotka.com/wp-content/uploads/2019/12/elman-leti-in.jpg" alt="ava" />
      <h5>User Name</h5>
    </div>
  );
}

export default UserItem;