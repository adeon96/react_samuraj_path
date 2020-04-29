import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


/* Posts */
let myPostsData = [
  { id: 1, text: "My first post" },
  { id: 2, text: "My second post" },
  { id: 3, text: "My third post" },
  { id: 4, text: "My fourth post" },
  { id: 5, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." }
];

/* Users */
let dialogsUsersData = [
  { id: 1, name: "Roma" },
  { id: 2, name: "Dima" },
  { id: 3, name: "Vika" },
  { id: 4, name: "Ira" },
  { id: 5, name: "Vasya" },
  { id: 6, name: "Sasha" }
];

/* Messages */
let myMessagesData = [
  { id: 1, text: "Hello from me!" },
  { id: 2, text: "Hello again!!!" },
  { id: 3, text: "Can you hear me???" },
  { id: 4, text: "Auuuuuuuu" }
];

let otherMessagesData = [
  { id: 1, text: "Hi you!" },
  { id: 2, text: "We say <b>hi</b>!!!" },
  { id: 3, text: "Of course, we hear you..." },
  { id: 4, text: "Why are you shouting???" }
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={myPostsData} users={dialogsUsersData} my_messages={myMessagesData} other_messages={otherMessagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
