import { addMessageActionCreator, updateNewMessageTextActionCreator }
  from '../../../redux/dialogsReducer';
import DialogsMessages from './DialogsMessages';

import { connect } from 'react-redux';

import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsMessages);