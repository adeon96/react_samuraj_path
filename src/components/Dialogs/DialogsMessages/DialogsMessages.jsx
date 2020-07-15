import React from 'react';
import styles from './DialogsMessages.module.css';

import MyMessageItem from './MessageItem/My/MyMessageItem';
import OtherMessageItem from './MessageItem/Other/OtherMessageItem';
import { reduxForm, Field } from 'redux-form';
import { FormElement } from '../../common/FormElements';
import { required, maxLengthCreator } from '../../../utils/validators';

const maxLength50 = maxLengthCreator(50);
const Textarea = FormElement("textarea");

const AddMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"messageTextarea"} placeholder={"Your message..."}
        validate={[required, maxLength50]} />
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