import React from 'react';
import styles from './Dialogs.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers';
import DialogsMessages from './DialogsMessages/DialogsMessages';

const Dialogs = (props) => {

  return (
    <div>
      <h3 className={styles.header}>Dialogs</h3>

      <div className={styles.dialogues}>
        <DialogsUsers dialogsUsers={props.dialogsPage.dialogsUsersData} />
        <DialogsMessages dialogsMessages={props.dialogsPage.messagesData}
          dispatch={props.dispatch} />
      </div>
    </div>
  );
}

export default Dialogs;