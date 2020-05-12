import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import About from './About/About';

const Profile = (props) => {
  return (
    <div>

      <About state={props.state.aboutData} dispatch={props.dispatch} />
      <MyPosts state={props.state.myPostsData} dispatch={props.dispatch}
        newPostText={props.state.newPostText} />

    </div>
  );
}

export default Profile;