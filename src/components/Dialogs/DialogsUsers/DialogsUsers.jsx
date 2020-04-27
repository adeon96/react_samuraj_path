import React from 'react';
import styles from './DialogsUsers.module.css'
import UserItem from './UserItem/UserItem'

const DialogsUsers = (props) => {
  return(
    <div className={styles.dialogues__users}>
      <UserItem name="Roma" id="1" /> 
      <UserItem name="Dima" id="2" />
      <UserItem name="Vika" id="3" />     
    </div>
  );
}

export default DialogsUsers;