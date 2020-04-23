import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.post}>
      <img src="https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1" alt="sweeet" />
      <p>{props.msg}</p>
      <p>Likes: {props.likes * 10}</p>
    </div>
  );
}

export default Post;