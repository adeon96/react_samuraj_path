import React from 'react';
import styles from './DialogsUsers.module.css'
import UserItem from './UserItem/UserItem'

const DialogsUsers = (props) => {

  let dialogsUsersData = [
    {id: 1, name: "Roma"},
    {id: 2, name: "Dima"},
    {id: 3, name: "Vika"},
    {id: 4, name: "Ira"},
    {id: 5, name: "Vasya"},
    {id: 6, name: "Sasha"},
  ];

  let dialogsUsers = dialogsUsersData.map(user => <UserItem key={user.id} name={user.name} /> )

  return(
    <div className={styles.dialogues__users}>
      {dialogsUsers}    
    </div>
  );
}

export default DialogsUsers;