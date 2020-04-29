import React from 'react';
import styles from './DialogsMessages.module.css';
import MyMessageItem from './MessageItem/My/MyMessageItem';
import OtherMessageItem from './MessageItem/Other/OtherMessageItem';

const DialogsMessages = (props) => {

  let myMessagesData = [
    {id: 1, text: "Hello from me!"},
    {id: 2, text: "Hello again!!!"},
    {id: 3, text: "Can you hear me???"},
    {id: 4, text: "Auuuuuuuu"}
  ];

  let otherMessagesData = [
    {id: 1, text: "Hi you!"},
    {id: 2, text: "We say <b>hi</b>!!!"},
    {id: 3, text: "Of course, we hear you..."},
    {id: 4, text: "Why are you shouting???"}
  ];

  let myMessages = myMessagesData.map(msg => <MyMessageItem key={msg.id} text={msg.text} />);

  let otherMessages = otherMessagesData.map(msg => <OtherMessageItem key={msg.id} text={msg.text} />)

  return(
    <div className={styles.dialogues__messages}>
      {myMessages}
      {otherMessages}
    </div>
  );
} 

export default DialogsMessages;