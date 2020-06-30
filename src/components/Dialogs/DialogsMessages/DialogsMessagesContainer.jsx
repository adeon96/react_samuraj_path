import { addMessageActionCreator }
  from '../../../redux/dialogsReducer';
import DialogsMessages from './DialogsMessages';

import { connect } from 'react-redux';

import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage.messagesData
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMsg) => {
      dispatch(addMessageActionCreator(newMsg));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsMessages);