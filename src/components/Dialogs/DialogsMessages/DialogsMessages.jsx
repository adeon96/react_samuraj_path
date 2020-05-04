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
    props.state.myMessagesData.map(msg => <MyMessageItem key={msg.id} text={msg.text} />);

  let otherMessages =
    props.state.otherMessagesData.map(msg => <OtherMessageItem key={msg.id} text={msg.text} />);

  return (
    <div className={styles.dialogues__messages}>
      {myMessages}
      {otherMessages}
    </div>
  );
}

export default DialogsMessages;