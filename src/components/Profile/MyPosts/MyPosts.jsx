import React from 'react';
import styles from './MyPosts.module.css';

import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../utils/validators';
import { FormElement } from '../../common/FormElements';

let maxLength10 = maxLengthCreator(10);
const Textarea = FormElement("textarea");

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"postTextarea"} placeholder={"What's new?.."}
        validate={[required, maxLength10]} />
      </div>
      <div> 
        <button>Send</button>
      </div>
    </form>
  )
}

const ReduxAddPostForm = reduxForm({form: 'addPost'})(AddPostForm);

/* props -> array of my posts (myPostsData) */
const MyPosts = (props) => {

  /* Converting array from objects to components */
  let myPosts = props.state.map(post => <Post key={post.id}
    id={post.id}
    image={post.image}
    text={post.text.length > 200 ?
      post.text.substring(0, 200) + "... Read more" : post.text}
    current_likes={post.likes}
    likePost={props.likePost} />);


  let onAddPostSubmit = (formData) => {
    props.addPost(formData.postTextarea);
  }

  return (
    <div className={styles.myPosts}>
      <h4>My posts</h4>

      <ReduxAddPostForm onSubmit={onAddPostSubmit} />

      <div className={styles.myPosts__items}>
        {myPosts}
      </div>
    </div>
  );
};

export default MyPosts;