import React from 'react';
import styles from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
  return(
    <div className={styles.myPosts}>
      <h2>My posts</h2>
      <textarea></textarea>
      <button>Add post</button>

      <Post msg="How are you?" likes="3" />
      <Post msg="React + Redux" likes="8" />
      <Post msg="V. Samsonov" likes="7" />
    </div>
  );
};

export default MyPosts;