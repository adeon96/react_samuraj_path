const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
  dialogsUsersData: [
    {
      id: 1,
      name: "Roma",
      image: 'https://lh4.googleusercontent.com/proxy/hoYnvK56YbWYiUdQh4Roxgvr7XUgZG0thbTyIjGLjdhDty9kRNZrTb64opGKwtqDRIudbcX25HkpNE5L_q9jP2T79Fo1SZX-bZNbvNLi-sZwTwAtpGlDszWeA3axCnILjz52Hw'
    },
    { id: 2, name: "Dima" },
    {
      id: 3,
      name: "Vika",
      image: 'https://photographyreel.com/file/images/12-2015/1-iran-beautiful-woman-photography.jpg'
    },
    {
      id: 4,
      name: "Ira"
    },
    { id: 5, name: "Vasya" },
    { id: 6, name: "Sasha" }
  ],

  messagesData: {
    myMessagesData: [
      { id: 1, text: "Hello from me!" },
      { id: 2, text: "Hello again!!!" },
      { id: 3, text: "Can you hear me???" },
      { id: 4, text: "Auuuuuuuu" }
    ],

    newMessageText: 'My new story will be...',

    otherMessagesData: [
      { id: 1, text: "Hi you!" },
      { id: 2, text: "We say <b>hi</b>!!!" },
      { id: 3, text: "Of course, we hear you..." },
      { id: 4, text: "Why are you shouting???" }
    ]
  }
};

const dialogsReducer = (state = initialState, action) => {

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