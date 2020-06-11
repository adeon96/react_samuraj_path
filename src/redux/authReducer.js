const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const TOGGLE_USER_AUTH_FETCHING = 'TOGGLE_USER_AUTH_FETCHING';

const initialState = {
  isFetching: false,
  userId: null,
  userEmail: null,
  userLogin: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.userData,
        isAuth: true
      }

    case TOGGLE_USER_AUTH_FETCHING:
      return {
        ...state,
        isFetching: action.fetchingFlag
      }

    default:
      return state;
  }
}

export default authReducer;

export const setUserAuthDataAC = (userId, userEmail, userLogin) => ({
  type: SET_USER_AUTH_DATA,
  userData: {userId, userEmail, userLogin}
});

export const toggleUserAuthFetchingAC = (flag) => ({
  type: TOGGLE_USER_AUTH_FETCHING,
  fetchingFlag: flag
});
