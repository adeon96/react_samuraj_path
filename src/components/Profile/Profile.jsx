import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import About from './About/About';

/* props -> profilePage */
const Profile = (props) => {
  return (
    <div>
      
      <About state={props.state.aboutData} />
      <MyPosts state={props.state.myPostsData} addPost={props.addPost} />

    </div>
  );
}

export default Profile;