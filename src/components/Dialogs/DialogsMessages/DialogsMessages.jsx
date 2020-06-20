import React from 'react';
import styles from './DialogsMessages.module.css';

import MyMessageItem from './MessageItem/My/MyMessageItem';
import OtherMessageItem from './MessageItem/Other/OtherMessageItem';


const DialogsMessages = (props) => {

  let myMessages =
    props.state.myMessagesData.map(msg =>
      <MyMessageItem key={msg.id} text={msg.text} />);

  let otherMessages =
    props.state.otherMessagesData.map(msg =>
      <OtherMessageItem key={msg.id} text={msg.text} />);


  let onMessageSend = () => {
    props.sendMessage();
  }


  let onMessageChange = (event) => {
    let msgText = event.target.value;
    props.updateNewMessageText(msgText);
  }


  return (
    <div className={styles.dialogues__messages}>
      {myMessages}
      {otherMessages}

      <div className={styles.sendForm}>
        <textarea placeholder='Write something...'
          value={props.newMessageText}
          onChange={onMessageChange} />
        <button onClick={onMessageSend}>Send</button>
      </div>
    </div>
  );
}

export default DialogsMessages;