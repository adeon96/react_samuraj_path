import React from 'react';
import styles from './Dialogs.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers';
import DialogsMessages from './DialogsMessages/DialogsMessages';

/* props -> dialogsPage */
const Dialogs = (props) => {

  //alert("New msg: " + props.newMessageText);

  return (
    <div>
      <h3 className={styles.header}>Dialogs</h3>

      <div className={styles.dialogues}>
        <DialogsUsers dialogsUsers={props.dialogsPage.dialogsUsersData} />
        <DialogsMessages store={props.store} dialogsMessages={props.dialogsPage.messagesData} />
      </div>
    </div>
  );
}

export default Dialogs;