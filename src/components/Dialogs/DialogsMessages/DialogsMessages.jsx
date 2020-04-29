import React from 'react';
import styles from './DialogsMessages.module.css';

import MyMessageItem from './MessageItem/My/MyMessageItem';
import OtherMessageItem from './MessageItem/Other/OtherMessageItem';

const DialogsMessages = (props) => {

  let myMessages = 
    props.my_messages.map(msg => <MyMessageItem key={msg.id} text={msg.text} />);

  let otherMessages =
    props.other_messages.map(msg => <OtherMessageItem key={msg.id} text={msg.text} />);

  return (
    <div className={styles.dialogues__messages}>
      {myMessages}
      {otherMessages}
    </div>
  );
}

export default DialogsMessages;