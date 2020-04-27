import React from 'react';
import styles from './DialogsMessages.module.css';
import MyMessageItem from './MessageItem/My/MyMessageItem';
import OtherMessageItem from './MessageItem/Other/OtherMessageItem';

const DialogsMessages = (props) => {
  return(
    <div className={styles.dialogues__messages}>
      <MyMessageItem text="Hello from me!" />
      <OtherMessageItem text="Hi from my friend!!!" />
      <OtherMessageItem text="Hi from my another friend!!!" />
      <MyMessageItem text="Hello from me again..." />
    </div>
  );
} 

export default DialogsMessages;