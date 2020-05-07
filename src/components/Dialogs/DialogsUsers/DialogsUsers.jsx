import React from 'react';
import styles from './DialogsUsers.module.css';

import UserItem from './UserItem/UserItem';


const DialogsUsers = (props) => {
  
  let dialogsUsers =
    props.dialogsUsers.map(user => <UserItem key={user.id} id={user.id} 
      name={user.name} image={user.image} />);

  return(
    <div className={styles.dialogues__users}>
      {dialogsUsers}    
    </div>
  );
}

export default DialogsUsers;