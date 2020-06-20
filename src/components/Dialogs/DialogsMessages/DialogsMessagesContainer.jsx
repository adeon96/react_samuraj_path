import { addMessageActionCreator, updateNewMessageTextActionCreator }
  from '../../../redux/dialogsReducer';
import DialogsMessages from './DialogsMessages';

import { connect } from 'react-redux';

import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage.messagesData,
    newMessageText: state.dialogsPage.messagesData.newMessageText
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

//Container component around DialogsMessages
//with Redirect logic
let withRedirectComponent = withAuthRedirect(DialogsMessages);

const DialogsMessagesContainer =
  connect(mapStateToProps, mapDispatchToProps)(withRedirectComponent);

export default DialogsMessagesContainer;