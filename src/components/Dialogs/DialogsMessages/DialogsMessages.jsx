import React from 'react';
import styles from './DialogsMessages.module.css';

import MyMessageItem from './MessageItem/My/MyMessageItem';
import OtherMessageItem from './MessageItem/Other/OtherMessageItem';
import { addMessageActionCreator, updateNewMessageTextActionCreator }
from '../../../redux/dialogsReducer';


const DialogsMessages = (props) => {

  let myMessages =
    props.dialogsMessages.myMessagesData.map(msg =>
      <MyMessageItem key={msg.id} text={msg.text} />);

  let otherMessages =
    props.dialogsMessages.otherMessagesData.map(msg =>
      <OtherMessageItem key={msg.id} text={msg.text} />);


  let sendMessage = () => {
    props.dispatch(addMessageActionCreator());
  }


  let onMessageChange = (event) => {
    let msgText = event.target.value;
    props.dispatch(updateNewMessageTextActionCreator(msgText));
  }


  return (
    <div className={styles.dialogues__messages}>
      {myMessages}
      {otherMessages}

      <div className={styles.sendForm}>
        <textarea placeholder='Write something...'
          value={props.dialogsMessages.newMessageText}
          onChange={onMessageChange} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default DialogsMessages;