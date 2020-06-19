//import React from 'react';

import { addMessageActionCreator, updateNewMessageTextActionCreator }
  from '../../../redux/dialogsReducer';
import DialogsMessages from './DialogsMessages';

import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.messagesData.newMessageText,
    isAuth: state.auth.isAuth
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addMessageActionCreator());
    },

    updateNewMessageText: (messageText) => {
      dispatch(updateNewMessageTextActionCreator(messageText));
    }
  }
}

const DialogsMessagesContainer = 
  connect(mapStateToProps, mapDispatchToProps)(DialogsMessages);

export default DialogsMessagesContainer;