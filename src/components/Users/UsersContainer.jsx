import { connect } from "react-redux";
import {setCurrentPageAC, getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator
}
  from "../../redux/usersReducer";

import UsersClass from './UsersClass';
import { compose } from "redux";
import { getUsers, getTotalUsersNumber, getUsersPerPage, getIsFetching, getCurrentPage } from "../../redux/usersSelectors";


let mapStateToProps = (state) => {

  return {
    usersArr: getUsers(state),
    totalUsersNumber: getTotalUsersNumber(state),
    usersPerPage: getUsersPerPage(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state)
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    followUser: (userId) => {
      dispatch(followUserThunkCreator(userId));
    },

    unfollowUser: (userId) => {
      dispatch(unfollowUserThunkCreator(userId));
    },

    getUsers: (currentPage, usersPerPage) => {
      dispatch(getUsersThunkCreator(currentPage, usersPerPage))
    },

    setCurrentPage: (pageNum) => {
      dispatch(setCurrentPageAC(pageNum));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(UsersClass);