import React from 'react';
import styles from './DialogsMessages.module.css';

import MyMessageItem from './MessageItem/My/MyMessageItem';
import OtherMessageItem from './MessageItem/Other/OtherMessageItem';
import { reduxForm, Field } from 'redux-form';

const AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name={"messageTextarea"} placeholder={"Your message..."} />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const ReduxAddMessageForm = reduxForm({form: 'newMessageForm'})(AddMessageForm);

const DialogsMessages = (props) => {

  let myMessages =
    props.state.myMessagesData.map(msg =>
      <MyMessageItem key={msg.id} text={msg.text} />);

  let otherMessages =
    props.state.otherMessagesData.map(msg =>
      <OtherMessageItem key={msg.id} text={msg.text} />);

  let onAddMessageSubmit = (formData) => {
    props.sendMessage(formData.messageTextarea);
  }


  return (
    <div className={styles.dialogues__messages}>
      {myMessages}
      {otherMessages}

      <ReduxAddMessageForm onSubmit={onAddMessageSubmit} />
    </div>
  );
}

export default DialogsMessages;