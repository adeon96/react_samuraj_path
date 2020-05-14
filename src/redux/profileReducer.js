const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST:
      let postIds = state.myPostsData.map(post => post.id);
      let newId = Math.max.apply(null, postIds) + 1;;

      let newPost = {
        id: newId,
        text: state.newPostText
      };

      state.myPostsData.unshift(newPost);
      state.newPostText = '';

      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (nText) => (
  { type: UPDATE_NEW_POST_TEXT, newText: nText });