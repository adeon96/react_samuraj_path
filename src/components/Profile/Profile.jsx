import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import About from './About/About';


const Profile = (props) => {
  return (
    <div>
      
      <About />
      <MyPosts posts={props.posts} />

    </div>
  );
}

export default Profile;