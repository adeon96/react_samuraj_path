import authAPI from "../api/authAPI";
import { stopSubmit } from "redux-form";

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA';
const TOGGLE_USER_AUTH_FETCHING = 'TOGGLE_USER_AUTH_FETCHING';

const authApi = new authAPI();

const initialState = {
  isFetching: false,
  userId: null,
  userEmail: null,
  userLogin: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH_DATA:
      return {
        ...state,
        ...action.payload
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

export const setUserAuthDataAC = (userId, userEmail, userLogin, isAuth) => ({
  type: SET_USER_AUTH_DATA,
  payload: { userId, userEmail, userLogin, isAuth }
});

export const toggleUserAuthFetchingAC = (flag) => ({
  type: TOGGLE_USER_AUTH_FETCHING,
  fetchingFlag: flag
});


//Thunk
export const getUserAuthData = () => (dispatch) => {
  dispatch(toggleUserAuthFetchingAC(true));

  authApi.authMe()
    .then(response => {
      
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserAuthDataAC(id, email, login, true));
      }

      dispatch(toggleUserAuthFetchingAC(false));
    })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authApi.authUser(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getUserAuthData())
      } else {
        dispatch(stopSubmit("login", {_error: response.data.messages[0]}));
      }
    })
}

export const logout = () => (dispatch) => {
  authApi.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserAuthDataAC(null, null, null, false))
      }
    })
}