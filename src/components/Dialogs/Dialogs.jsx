import React from 'react';
import styles from './Dialogs.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers';
import DialogsMessages from './DialogsMessages/DialogsMessages';


const Dialogs = (props) => {

  return (
    <div>
      <h3 className={styles.header}>Dialogs</h3>

      <div className={styles.dialogues}>
        <DialogsUsers users={props.users} />
        <DialogsMessages my_messages={props.my_messages} other_messages={props.other_messages} />
      </div>
    </div>
  );
}

export default Dialogs;