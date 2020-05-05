import React from 'react';
import styles from './MyPosts.module.css';

import Post from './Post/Post';

/* props -> array of my posts (myPostsData) */
const MyPosts = (props) => {

  /* Converting array from objects to components */
  let myPosts = props.state.map(post => <Post key={post.id}
    image={post.image}
    text={post.text.length > 200 ?
      post.text.substring(0, 200) + "... Read more" : post.text} />);



  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }

  return (
    <div className={styles.myPosts}>
      <h4>My posts</h4>

      <div className={styles.myPosts__form}>
        <textarea ref={newPostElement}
          className={styles.form__textarea} placeholder="What's new?.."></textarea>
        <button onClick={addPost} className={styles.form__button}>Add post</button>
      </div>

      <div className={styles.myPosts__items}>
        {myPosts}
      </div>
    </div>
  );
};

export default MyPosts;