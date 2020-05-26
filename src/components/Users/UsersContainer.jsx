import { connect } from "react-redux";
import { toggleUserFollowAC, setUsersAC } from "../../redux/usersReducer";

import Users from './Users';

let mapStateToProps = (state) => {
  return {
    usersArr: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    toggleUserFollow: (userId) => {
      dispatch(toggleUserFollowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;