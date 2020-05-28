//import React from 'react';

import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator, likePostAC }
  from '../../../redux/profileReducer';

import { connect } from 'react-redux';


let mapStateToProps = (state) => {

  //console.log("MyPostsCont mstp");

  return {
    state: state.postsPage.myPostsData,
    newPostText: state.postsPage.newPostText
  }

};

let mapDispatchToProps = (dispatch) => {

  //console.log("MyPostsCont mdtp");
  
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },

    updateNewPostText: (newPostText) => {
      dispatch(updateNewPostTextActionCreator(newPostText));
    },

    likePost: (postId) => {
      dispatch(likePostAC(postId));
    }
  }

};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;