import React from 'react';
import styles from './DialogsUsers.module.css'
import UserItem from './UserItem/UserItem'

const DialogsUsers = (props) => {
  return(
    <div className={styles.dialogues__users}>
      <UserItem /> 
      <UserItem />
      <UserItem />     
    </div>
  );
}

export default DialogsUsers;