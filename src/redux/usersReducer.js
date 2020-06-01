const TOGGLE_USER_FOLLOW = 'TOGGLE-USER-FOLLOW';
const TOGGLE_USERS_FETCHING = 'TOGGLE-USERS-FETCHING';

const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

const initialState = {
  users: [],
  currentPage: 1,
  totalUsersNumber: 0,
  usersPerPage: 10,
  isFetching: false
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case TOGGLE_USER_FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: !user.followed };
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

export const toggleUserFollowAC = (uId) => ({
  type: TOGGLE_USER_FOLLOW, userId: uId
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