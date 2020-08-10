import React from 'react';
import styles from './Post.module.css';

import defaultImg from '../../../../assets/img/placeholderImg.png';


const Post = (props) => {

  let onPostLike = () => {
    props.likePost(props.id);
  }

  let onPostDelete = () => {
    props.deletePost(props.id);
  }

  return (
    <div className={styles.post}>
      <div className={styles.post__image}>
        <img 
          src={props.image === undefined ? 
            defaultImg : props.image} alt="sweeet" />
      </div>

      <div className={styles.post__text}>
        <p>{props.text}</p>
      </div>

      <div className={styles.like__btn}>
        <button onClick={onPostLike}>Like</button>
        <span>{props.current_likes}</span>
      </div>

      <div className={styles.delete__btn}>
        <button onClick={onPostDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Post;