import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import AboutContainer from './About/AboutContainer';

const Profile = (props) => {

  return (
    <div>

      <AboutContainer store={props.store} />
      <MyPostsContainer store={props.store} />

    </div>
  );
}

export default Profile;