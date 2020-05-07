import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { addPost, updatePostText, updateNewMessageText, addMessage } from './redux/state';
//import state from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (state) => {

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