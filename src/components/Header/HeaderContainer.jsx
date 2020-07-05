import React from 'react';
import Header from './Header';
import { getUserAuthData } from '../../redux/authReducer';
import { connect } from 'react-redux';
import usersAPI from '../../api/usersAPI';
import { logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  api = new usersAPI();

  componentDidMount() {
    this.props.getUserAuthData();
  }

  render() {
    return <Header {...this.props} />
  }

}

const mapStateToProps = (state) => {

  return {
    userId: state.auth.userId,
    userEmail: state.auth.userEmail,
    userLogin: state.auth.userLogin,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth
  }

}

const mapDispatchToProps = (dispatch) => {

  return {
    getUserAuthData: () => {
      dispatch(getUserAuthData());
    },

    logoutUser: () => {
      dispatch(logout())
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);