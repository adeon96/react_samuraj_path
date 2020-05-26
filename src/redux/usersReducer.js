const TOGGLE_USER_FOLLOW = 'TOGGLE-USER-FOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
  users: [
    /*{
      id: 1,
      name: 'Roma',
      photoURL: 'https://cdn.pixabay.com/photo/2019/05/24/10/59/business-man-4226005_960_720.jpg',
      location: {
        city: 'Kyiv',
        country: 'Ukraine'
      },
      status: 'I am a little samurai...',
      isFollowed: true
    },

    {
      id: 2,
      name: 'Vika',
      photoURL: 'https://i.pinimg.com/originals/97/ed/6b/97ed6b370803649addbf66144c18c194.png',
      location: {
        city: 'Warsaw',
        country: 'Poland'
      },
      status: 'Looking for something special...',
      isFollowed: true
    },

    {
      id: 3,
      name: 'Dima',
      location: {
        city: 'Minsk',
        country: 'Belarus'
      },
      status: 'I am a Barca fan...',
      isFollowed: false
    }*/
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_USER_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id === action.userId) {
            return {...user, isFollowed: !user.isFollowed};
          }

          return user;          
        }) 
      }

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    
    default:
      return state;
  }
};

export default usersReducer;
export const toggleUserFollowAC = (uId) => 
  ({type: TOGGLE_USER_FOLLOW, userId: uId});

export const setUsersAC = (usersData) => ({
  type: SET_USERS,
  users: usersData
});