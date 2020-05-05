import React from 'react';
import styles from './DialogsMessages.module.css';

import MyMessageItem from './MessageItem/My/MyMessageItem';
import OtherMessageItem from './MessageItem/Other/OtherMessageItem';

/**
 * 
 * @param {*} props 
 * 
 * props -> messagesData
 * props.state = messagesData
 */
const DialogsMessages = (props) => {

  let myMessages =
    props.state.myMessagesData.map(msg =>
      <MyMessageItem key={msg.id} text={msg.text} />);

  let otherMessages =
    props.state.otherMessagesData.map(msg =>
      <OtherMessageItem key={msg.id} text={msg.text} />);


  let newMessageRef = React.createRef();

  let sendMessage = () => {
    let msgText = newMessageRef.current.value;
    alert(msgText);
  }

  return (
    <div className={styles.dialogues__messages}>
      {myMessages}
      {otherMessages}

      <div className={styles.sendForm}>
        <textarea ref={newMessageRef} placeholder='Write something...'></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default DialogsMessages;