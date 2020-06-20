import { connect } from "react-redux";
import {setCurrentPageAC, getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator
}
  from "../../redux/usersReducer";

import UsersClass from './UsersClass';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


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

let withRedirectUsers = withAuthRedirect(UsersClass);

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(withRedirectUsers);
export default UsersContainer;