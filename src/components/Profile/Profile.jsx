import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import About from './About/About';

/* props -> profilePage */
const Profile = (props) => {
  return (
    <div>

      <About state={props.profilePage.aboutData} />
      <MyPosts state={props.profilePage.myPostsData}
        addPost={props.addPost}
        updateNewPost={props.updateNewPost}
        newPostText={props.profilePage.newPostText} />

    </div>
  );
}

export default Profile;