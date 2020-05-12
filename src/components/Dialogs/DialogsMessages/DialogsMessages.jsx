import React from 'react';
import styles from './DialogsMessages.module.css';

import MyMessageItem from './MessageItem/My/MyMessageItem';
import OtherMessageItem from './MessageItem/Other/OtherMessageItem';


const DialogsMessages = (props) => {

  let myMessages =
    props.dialogsMessages.myMessagesData.map(msg =>
      <MyMessageItem key={msg.id} text={msg.text} />);

  let otherMessages =
    props.dialogsMessages.otherMessagesData.map(msg =>
      <OtherMessageItem key={msg.id} text={msg.text} />);


  let newMessageRef = React.createRef();

  let sendMessage = () => {
    props.dispatch({ type: 'ADD-MESSAGE' });
  }


  let onMessageChange = () => {
    let msgText = newMessageRef.current.value;
    props.dispatch({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMsgText: msgText})
  }


  return (
    <div className={styles.dialogues__messages}>
      {myMessages}
      {otherMessages}

      <div className={styles.sendForm}>
        <textarea ref={newMessageRef} 
          placeholder='Write something...'
          value={props.dialogsMessages.newMessageText}
          onChange={onMessageChange} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default DialogsMessages;