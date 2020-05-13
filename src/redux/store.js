const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _subscriber() {
    console.log("no subscribers / observers");
  },

  _state: {
    profilePage: {
      myPostsData: [
        {
          id: 1,
          image: 'data:image/jpeg;base64,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',
          text: "My first post"
        },
        {
          id: 2,
          image: 'data:image/jpeg;base64,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',
          text: "My second post"
        },
        {
          id: 3,
          text: "My third post"
        },
        {
          id: 4,
          text: "My fourth post"
        },
        {
          id: 5,
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
      ],

      newPostText: 'Today I have...',

      aboutData: {
        name: 'Petya Petrov',
        photoURL: 'data:image/jpeg;base64,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',
        birth: '12 June 1996',
        city: 'Gdansk',
        website: 'www.ttroma.ua',
        email: 'promin777@gmail.com'
      }

    },

    dialogsPage: {
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
    }
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._subscriber = observer;
  },

  _getPostId() {
    let postIds = this._state.profilePage.myPostsData.map(post => post.id);

    return Math.max.apply(null, postIds) + 1;
  },

  _getMessageId() {
    let messageIds = this._state.dialogsPage.messagesData.myMessagesData.map(msg => msg.id);

    return Math.max.apply(null, messageIds) + 1;
  },

  /* POSTS LOGIC */

  /*addPost() {
    let newId = this._getPostId();
  
    let newPost = {
      id: newId,
      text: this._state.profilePage.newPostText
    };
  
    this._state.profilePage.myPostsData.unshift(newPost);
  
    //Clear textarea after adding post
    this._state.profilePage.newPostText = '';
  
    //draw updated tree
    this._subscriber();
  },*/

  /*updatePostText(newText) {
    this._state.profilePage.newPostText = newText;

    //draw updated tree
    this._subscriber();
  },*/

  /* MESSAGE LOGIC */

  /*addMessage() {
    let newId = this._getMessageId();

    let newMessage = {
      id: newId,
      text: this._state.dialogsPage.messagesData.newMessageText
    };

    this._state.dialogsPage.messagesData.myMessagesData.push(newMessage);

    //Clear textarea after adding new message
    this._state.dialogsPage.messagesData.newMessageText = '';

    //draw updated tree
    this._subscriber();
  },*/

  /*updateNewMessageText(newMsgText) {
    this._state.dialogsPage.messagesData.newMessageText = newMsgText;

    //draw updated tree
    this._subscriber();
  },*/

  dispatch(action) {
    if (action.type === ADD_POST) {

      let newId = this._getPostId();

      let newPost = {
        id: newId,
        text: this._state.profilePage.newPostText
      };

      this._state.profilePage.myPostsData.unshift(newPost);

      //Clear textarea after adding post
      this._state.profilePage.newPostText = '';
      this._subscriber();

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._subscriber();

    } else if (action.type === ADD_MESSAGE) {
      let newId = this._getMessageId();

      let newMessage = {
        id: newId,
        text: this._state.dialogsPage.messagesData.newMessageText
      };

      this._state.dialogsPage.messagesData.myMessagesData.push(newMessage);

      //Clear textarea after adding new message
      this._state.dialogsPage.messagesData.newMessageText = '';
      this._subscriber();

    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.messagesData.newMessageText = action.newMsgText;

      //draw updated tree
      this._subscriber();

    }
  }

};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (nText) => (
  { type: UPDATE_NEW_POST_TEXT, newText: nText });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (msgText) => (
  { type: UPDATE_NEW_MESSAGE_TEXT, newMsgText: msgText});

export default store;