import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { addPost, updatePostText,
  updateNewMessageText, addMessage, subscribe } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';

let rerenderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateNewPost={updatePostText}
          addMessage={addMessage} updateNewMessage={updateNewMessageText} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );

};

//draw tree for whole app
rerenderEntireTree(state);

//subscribe for event listening
//event - changing the state
//action - rerendering app tree
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
