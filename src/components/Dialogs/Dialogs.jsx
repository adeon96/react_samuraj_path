import React from 'react';
import styles from './Dialogs.module.css'
import DialogsUsersContainer from './DialogsUsers/DialogsUsersContainer';
import DialogsMessagesContainer from './DialogsMessages/DialogsMessagesContainer';

const Dialogs = (props) => {

  return (
    <div>
      <h3 className={styles.header}>Dialogs</h3>

      <div className={styles.dialogues}>
        <DialogsUsersContainer store={props.store} />
        <DialogsMessagesContainer store={props.store} />
      </div>
    </div>
  );
}

export default Dialogs;