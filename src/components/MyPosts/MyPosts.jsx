import React from 'react';
import styles from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.myPosts}>
      <h4>My posts</h4>

      <div className={styles.myPosts__form}>
        <textarea className={styles.form__textarea} placeholder="What's new?.."></textarea>
        <button className={styles.form__button}>Add post</button>
      </div>

      <div className={styles.myPosts__items}>
        <Post msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." likes="3" />
      </div>
    </div>
  );
};

export default MyPosts;