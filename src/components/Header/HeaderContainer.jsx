import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import usersAPI from '../../api/usersAPI';
import { logout } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

  api = new usersAPI();

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
    logoutUser: () => {
      dispatch(logout())
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);