import React from 'react';
//import styles from './Profile.module.css';

import MyPosts from '../MyPosts/MyPosts';
import About from './About/About';

const Profile = () => {
  return (
    <div>
      
      <About />
      <MyPosts />

    </div>
  );
}

export default Profile;