import React from 'react';
import styles from './Profile.module.css';

import MyPosts from '../MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={styles.content}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrbKzP3AUIwnPEJAQo60iEHZ2WR12k1XHEyXV0WYmaQ76D94cPg&s" alt="sea" />

      <p>ava + descr</p>
      <MyPosts />

    </div>
  );
}

export default Profile;