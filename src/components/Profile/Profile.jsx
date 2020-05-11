import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import About from './About/About';

/* props -> profilePage */
const Profile = (props) => {
  return (
    <div>

      <About store={props.store} />

      {/*<MyPosts state={props.profilePage.myPostsData}
        addPost={props.addPost}
        updateNewPost={props.updateNewPost}
        newPostText={props.profilePage.newPostText} />*/}

      <MyPosts store={props.store} />

    </div>
  );
}

export default Profile;