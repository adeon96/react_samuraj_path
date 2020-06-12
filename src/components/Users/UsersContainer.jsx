import { connect } from "react-redux";
import {
  toggleUserFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC,
  setToggleUsersFetchingAC
}
  from "../../redux/usersReducer";

import UsersClass from './UsersClass';
import * as axios from 'axios';

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

      //Server query

      //If we already follow this user?
      axios.get('https://social-network.samuraijs.com/api/1.0/follow/' + userId,
        { withCredentials: true })
        .then(response => {
          if (response.data === true) {

            //Unollow user
            axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + userId,
              {
                withCredentials: true,
                headers: {
                  'API-KEY': 'e1de558d-3eb2-467c-959e-2ffee0df160a'
                }
              })
              .then(response => {
                if (response.data.resultCode === 0) {
                  dispatch(toggleUserFollowAC(userId));
                }
              });

          } else {

            //Follow user
            axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + userId, {},
              {
                withCredentials: true,
                headers: {
                  'API-KEY': 'e1de558d-3eb2-467c-959e-2ffee0df160a'
                }
              })
              .then(response => {
                if (response.data.resultCode === 0) {
                  dispatch(toggleUserFollowAC(userId));
                }
              });
          }

        });

      //dispatch(toggleUserFollowAC(userId));
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