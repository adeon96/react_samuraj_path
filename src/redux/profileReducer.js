const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const LIKE_POST = 'LIKE-POST';

const initialState = {
  myPostsData: [
    {
      id: 1,
      text: "My first post!!!",
      likes: 0
    },
    {
      id: 2,
      text: "My second post",
      likes: 0
    },
    {
      id: 3,
      text: "My third post",
      likes: 0
    },
    {
      id: 4,
      text: "My fourth post",
      likes: 0
    },
    {
      id: 5,
      likes: 0,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
  ],

  newPostText: 'Today I have...'

};

const profileReducer = (state = initialState, action) => {

  /*console.log("Profile reducer...");
  console.log("state: " + state);
  console.log("action: " + action.type);
  console.log("***********");*/

  switch (action.type) {
    case ADD_POST:
      let postIds = state.myPostsData.map(post => post.id);
      let newId = Math.max.apply(null, postIds) + 1;

      let newPost = {
        id: newId,
        text: state.newPostText,
        likes: 0
      };

      return { 
        ...state,
        myPostsData: [newPost, ...state.myPostsData],
        newPostText: ''
      };
    

    case UPDATE_NEW_POST_TEXT:
      return { 
        ...state,
        newPostText: action.newText
      };

    case LIKE_POST:
      return {
        ...state,
        myPostsData: state.myPostsData.map(post => {
          if(post.id === action.postId) {
            return {...post, likes: ++post.likes}
          }

          return post;
        })
      }

    default:
      return state;
  }
}

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (nText) => (
  { type: UPDATE_NEW_POST_TEXT, newText: nText });

export const likePostAC = (pstId) => ({
  type: LIKE_POST,
  postId: pstId
});