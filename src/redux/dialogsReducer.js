const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  dialogsUsersData: [
    {
      id: 1,
      name: "Roma",
      image: ''
    },
    { id: 2, name: "Dima" },
    {
      id: 3,
      name: "Vika",
      image: 'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg'
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
        text: action.newMessage
      };

      return {
        ...state,

        messagesData: {
          ...state.messagesData,
          myMessagesData: [...state.messagesData.myMessagesData, newMessage],
        }

      }

    default:
      return state;
  }
}

export default dialogsReducer;

export const addMessageActionCreator = (newMsg) => ({ 
  type: ADD_MESSAGE, newMessage: newMsg 
});