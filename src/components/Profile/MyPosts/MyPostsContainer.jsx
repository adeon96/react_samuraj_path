import React from 'react';

import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator }
  from '../../../redux/profileReducer';
import StoreContext from '../../../redux/StoreContext';

const MyPostsContainer = () => {

  return (

    <StoreContext.Consumer> 
      {(store) => {

        let state = store.getState();

        let addPost = () => {
          store.dispatch(addPostActionCreator());
        }

        let updateNewPostText = (newPostText) => {
          store.dispatch(updateNewPostTextActionCreator(newPostText));
        }

        return (<MyPosts addPost={addPost} updateNewPostText={updateNewPostText}
                        state={state.profilePage.myPostsData}
                        newPostText={state.profilePage.newPostText} />);
      }}
    </StoreContext.Consumer>

  );
};

export default MyPostsContainer;