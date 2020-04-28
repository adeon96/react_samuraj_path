import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__image}>
        <img src="https://blogmedia.evbstatic.com/wp-content/uploads/rally-legacy/2019/09/11020650/1DERAp_t20_n08Ek4-1500x750.jpg" alt="sweeet" />
      </div>

      <div className={styles.post__text}>
        <p>{props.msg}</p>
      </div>
    </div>
  );
}

export default Post;