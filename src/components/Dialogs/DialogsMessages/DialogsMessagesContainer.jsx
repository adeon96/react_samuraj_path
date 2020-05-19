import React from 'react';

import { addMessageActionCreator, updateNewMessageTextActionCreator }
  from '../../../redux/dialogsReducer';
import DialogsMessages from './DialogsMessages';
import StoreContext from '../../../redux/StoreContext';

const DialogsMessagesContainer = () => {

  return (

    <StoreContext.Consumer>
      {(store) => {

        let state = store.getState();

        let sendMessage = () => {
          store.dispatch(addMessageActionCreator());
        }

        let updateNewMessageText = (messageText) => {
          store.dispatch(updateNewMessageTextActionCreator(messageText));
        }

        return (<DialogsMessages state={state.dialogsPage.messagesData}
          sendMessage={sendMessage}
          updateNewMessageText={updateNewMessageText}
          newMessageText={state.dialogsPage.messagesData.newMessageText} />);
      }}
    </StoreContext.Consumer>

  );
};

export default DialogsMessagesContainer;