import React from 'react';

import { addMessageActionCreator, updateNewMessageTextActionCreator }
from '../../../redux/dialogsReducer';
import DialogsMessages from './DialogsMessages';

const DialogsMessagesContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let sendMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let updateNewMessageText = (messageText) => {
    props.store.dispatch(updateNewMessageTextActionCreator(messageText));
  }

  return(
    <DialogsMessages state={state.messagesData}
      sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}
      newMessageText={state.messagesData.newMessageText} />
  );
};

export default DialogsMessagesContainer;