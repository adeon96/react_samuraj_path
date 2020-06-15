import React from 'react';
import Header from './Header';
import { setUserAuthDataAC, toggleUserAuthFetchingAC } from '../../redux/authReducer';
import { connect } from 'react-redux';
import usersAPI from '../../api/usersAPI';

class HeaderContainer extends React.Component {

  api = new usersAPI();

  componentDidMount() {
    this.props.toggleUserAuthFetching(true);

    this.api.authorizeUser()
      .then(response => {
        if (response.resultCode === 0) {
          let { id, email, login } = response.data;
          this.props.setUserAuthData(id, email, login);
        }

        this.props.toggleUserAuthFetching(false);
      })

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