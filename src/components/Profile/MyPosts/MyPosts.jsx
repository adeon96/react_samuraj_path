import React from 'react';
import styles from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {

  let myPostsData = [
    {id: 1, text: "My first post"},
    {id: 2, text: "My second post"},
    {id: 3, text: "My third post"},
    {id: 4, text: "My fourth post"},
    {id: 5, text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
  ];

  let myPosts = myPostsData.map(post => <Post key={post.id} 
    text={post.text.length > 200 ? post.text.substring(0, 200) + "... Read more" : post.text} />)

  return (
    <div className={styles.myPosts}>
      <h4>My posts</h4>

      <div className={styles.myPosts__form}>
        <textarea className={styles.form__textarea} placeholder="What's new?.."></textarea>
        <button className={styles.form__button}>Add post</button>
      </div>

      <div className={styles.myPosts__items}>
        {myPosts}
      </div>
    </div>
  );
};

export default MyPosts;