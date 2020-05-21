//import React from 'react';

import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator }
  from '../../../redux/profileReducer';

import { connect } from 'react-redux';


let mapStateToProps = (state) => {

  return {
    state: state.profilePage.myPostsData,
    newPostText: state.profilePage.newPostText
  }

};

let mapDispatchToProps = (dispatch) => {
  
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },

    updateNewPostText: (newPostText) => {
      dispatch(updateNewPostTextActionCreator(newPostText));
    }
  }

};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;