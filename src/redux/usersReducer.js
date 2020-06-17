import usersAPI from '../api/usersAPI';

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const TOGGLE_USER_DISABLE = 'TOGGLE-USER-DISABLE';
const TOGGLE_USERS_FETCHING = 'TOGGLE-USERS-FETCHING';

const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

const usersApi = new usersAPI();

const initialState = {
  users: [],
  currentPage: 1,
  totalUsersNumber: 0,
  usersPerPage: 10,
  isFetching: false
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_USER_DISABLE:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, disabled: !user.disabled };
          }

          return user;
        })
      }

    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }

          return user;
        })
      }

    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }

          return user;
        })
      }

    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.pageNum
      }

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersNumber: action.totUsrNum
      }

    case TOGGLE_USERS_FETCHING:
      return {
        ...state,
        isFetching: action.fetchingFlag
      }

    default:
      return state;
  }
};

export default usersReducer;

export const toggleUserDisableAC = (uId) => ({
  type: TOGGLE_USER_DISABLE, userId: uId
});

export const followUserAC = (uId) => ({
  type: FOLLOW_USER, userId: uId
});

export const unfollowUserAC = (uId) => ({
  type: UNFOLLOW_USER, userId: uId
});

export const setUsersAC = (usersData) => ({
  type: SET_USERS,
  users: usersData
});

export const setCurrentPageAC = (newPage) => ({
  type: SET_CURRENT_PAGE,
  pageNum: newPage
});

export const setTotalUsersCountAC = (totQuantity) => ({
  type: SET_TOTAL_USERS_COUNT,
  totUsrNum: totQuantity
});

export const setToggleUsersFetchingAC = (fetFlag) => ({
  type: TOGGLE_USERS_FETCHING,
  fetchingFlag: fetFlag
});


//Thunk
export const getUsersThunkCreator = (currentPage, usersPerPage) => {

  return (dispatch) => {
    dispatch(setToggleUsersFetchingAC(true));

    usersApi.getUsers(currentPage, usersPerPage)
      .then(data => {
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount));
        dispatch(setToggleUsersFetchingAC(false));
      });
  }
}

export const followUserThunkCreator = (userId) => {

  return (dispatch) => {

    dispatch(toggleUserDisableAC(userId));

    usersApi.followUser(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(followUserAC(userId));
        }

        dispatch(toggleUserDisableAC(userId));
      });
  }
}

export const unfollowUserThunkCreator = (userId) => {

  return (dispatch) => {

    dispatch(toggleUserDisableAC(userId));

    usersApi.unfollowUser(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowUserAC(userId));
        }

        dispatch(toggleUserDisableAC(userId));
      });
  }
}