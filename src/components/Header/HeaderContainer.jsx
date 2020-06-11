import React from 'react';
import Header from './Header';
import { setUserAuthDataAC, toggleUserAuthFetchingAC } from '../../redux/authReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';

class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.toggleUserAuthFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',
      {withCredentials: true})
    .then(response => {
      if(response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        this.props.setUserAuthData(id, email, login);
      }

      this.props.toggleUserAuthFetching(false);
    });
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
    setUserAuthData: (id, email, login) => {
      dispatch(setUserAuthDataAC(id, email, login));
    },

    toggleUserAuthFetching: (flag) => {
      dispatch(toggleUserAuthFetchingAC(flag));
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);