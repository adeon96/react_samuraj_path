import { connect } from "react-redux";
import { toggleUserFollowAC, setUsersAC } from "../../redux/usersReducer";

import UsersClass from './UsersClass';
//import Users from './Users';

let mapStateToProps = (state) => {
  //debugger;
  console.log("Users mstp.");

  return {
    usersArr: state.usersPage.users
  }
}

let mapDispatchToProps = (dispatch) => {
  //debugger;
  console.log("Users mdtp");

  return {
    toggleUserFollow: (userId) => {
      dispatch(toggleUserFollowAC(userId));
    },

    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);
export default UsersContainer;