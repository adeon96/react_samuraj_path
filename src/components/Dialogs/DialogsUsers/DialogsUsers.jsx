import React from 'react';
import styles from './DialogsUsers.module.css';

import UserItem from './UserItem/UserItem';
import defaultUserImg from '../../../assets/img/user_placeholder.jpg';


const DialogsUsers = (props) => {
  
  let dialogsUsers =
    props.state.map(user => <UserItem key={user.id} id={user.id} 
      name={user.name} image={user.image ? user.image : defaultUserImg} />);

  return(
    <div className={styles.dialogues__users}>
      {dialogsUsers}    
    </div>
  );
}

export default DialogsUsers;