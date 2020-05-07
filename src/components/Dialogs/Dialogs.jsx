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
        <DialogsMessages dialogsMessages={props.dialogsPage.messagesData}
          addMessage={props.addMessage} updateNewMessage = {props.updateNewMessage} />
        {/*<DialogsMessages my_messages={props.my_messages} other_messages={props.other_messages} />*/}
      </div>
    </div>
  );
}

export default Dialogs;