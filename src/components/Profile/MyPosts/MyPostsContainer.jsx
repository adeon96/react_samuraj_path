import React from 'react';

import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator}
from '../../../redux/profileReducer';

const MyPostsContainer = (props) => {

  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  }

  let updateNewPostText = (newPostText) => {
    props.store.dispatch(updateNewPostTextActionCreator(newPostText));
  }

  return(
    <MyPosts addPost={addPost} updateNewPostText={updateNewPostText}
      state={state.myPostsData} newPostText={state.newPostText} />
  );
};

export default MyPostsContainer;