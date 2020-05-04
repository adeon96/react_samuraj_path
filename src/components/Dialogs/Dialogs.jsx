import React from 'react';
import styles from './Dialogs.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers';
import DialogsMessages from './DialogsMessages/DialogsMessages';

/* props -> dialogsPage */
const Dialogs = (props) => {

  return (
    <div>
      <h3 className={styles.header}>Dialogs</h3>

      <div className={styles.dialogues}>
        <DialogsUsers state={props.state.dialogsUsersData} />
        <DialogsMessages state={props.state.messagesData} />
        {/*<DialogsMessages my_messages={props.my_messages} other_messages={props.other_messages} />*/}
      </div>
    </div>
  );
}

export default Dialogs;