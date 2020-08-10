import MyPosts from "./MyPosts";
import { addPostActionCreator, likePostAC, deletePostAC }
  from '../../../redux/profileReducer';

import { connect } from 'react-redux';


let mapStateToProps = (state) => {

  return {
    state: state.postsPage.myPostsData
  }

};

let mapDispatchToProps = (dispatch) => {
  
  return {
    addPost: (postText) => {
      dispatch(addPostActionCreator(postText));
    },

    likePost: (postId) => {
      dispatch(likePostAC(postId));
    },

    deletePost: (postId) => {
      dispatch(deletePostAC(postId));
    }
  }

};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;