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
    props.dialogsMessages.myMessagesData.map(msg =>
      <MyMessageItem key={msg.id} text={msg.text} />);

  let otherMessages =
    props.dialogsMessages.otherMessagesData.map(msg =>
      <OtherMessageItem key={msg.id} text={msg.text} />);


  let newMessageRef = React.createRef();

  let sendMessage = () => {
    props.store.addMessage();
  }


  let onMessageChange = () => {
    let msgText = newMessageRef.current.value;
    props.store.updateNewMessageText(msgText);
  }


  return (
    <div className={styles.dialogues__messages}>
      {myMessages}
      {otherMessages}

      <div className={styles.sendForm}>
        <textarea ref={newMessageRef} 
          placeholder='Write something...'
          value={props.store.getDefaultMessageText()}
          onChange={onMessageChange} />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default DialogsMessages;