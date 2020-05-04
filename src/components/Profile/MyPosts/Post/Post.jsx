import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__image}>
        <img 
          src={props.image === undefined ? 
            'https://mypower.in.ua/wp-content/uploads/placeholder-300x200.png' : 
            props.image} alt="sweeet" />
      </div>

      <div className={styles.post__text}>
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default Post;