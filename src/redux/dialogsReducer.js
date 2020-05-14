const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      let messageIds = state.messagesData.myMessagesData.map(msg => msg.id);
      let newId = Math.max.apply(null, messageIds) + 1;;

      let newMessage = {
        id: newId,
        text: state.messagesData.newMessageText
      };

      state.messagesData.myMessagesData.push(newMessage);
      state.messagesData.newMessageText = '';

      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.messagesData.newMessageText = action.newMsgText;
      return state;

    default:
      return state;
  }
}

export default dialogsReducer;

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (msgText) => (
  { type: UPDATE_NEW_MESSAGE_TEXT, newMsgText: msgText });