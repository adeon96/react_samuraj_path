import { connect } from "react-redux";
import {
  toggleUserFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC,
  setToggleUsersFetchingAC
}
  from "../../redux/usersReducer";

import UsersClass from './UsersClass';

let mapStateToProps = (state) => {

  return {
    usersArr: state.usersPage.users,
    totalUsersNumber: state.usersPage.totalUsersNumber,
    usersPerPage: state.usersPage.usersPerPage,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

let mapDispatchToProps = (dispatch) => {

  return {
    toggleUserFollow: (userId) => {
      dispatch(toggleUserFollowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },

    setCurrentPage: (pageNum) => {
      dispatch(setCurrentPageAC(pageNum));
    },

    setTotalUsersNumber: (number) => {
      dispatch(setTotalUsersCountAC(number));
    },

    setUsersFetching: (fetchingFlag) => {
      dispatch(setToggleUsersFetchingAC(fetchingFlag));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);
export default UsersContainer;