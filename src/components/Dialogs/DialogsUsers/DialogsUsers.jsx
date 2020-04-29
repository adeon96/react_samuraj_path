import React from 'react';
import styles from './DialogsUsers.module.css';

import UserItem from './UserItem/UserItem';

const DialogsUsers = (props) => {
  
  let dialogsUsers =
    props.users.map(user => <UserItem key={user.id} id={user.id} name={user.name} />);

  return(
    <div className={styles.dialogues__users}>
      {dialogsUsers}    
    </div>
  );
}

export default DialogsUsers;