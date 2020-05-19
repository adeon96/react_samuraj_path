import React from 'react';
import styles from './Dialogs.module.css'
import DialogsUsersContainer from './DialogsUsers/DialogsUsersContainer';
import DialogsMessagesContainer from './DialogsMessages/DialogsMessagesContainer';

const Dialogs = () => {

  return (
    <div>
      <h3 className={styles.header}>Dialogs</h3>

      <div className={styles.dialogues}>
        <DialogsUsersContainer />
        <DialogsMessagesContainer />
      </div>
    </div>
  );
}

export default Dialogs;