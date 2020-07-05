import React from 'react';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../../redux/aboutReducer';

import { connect } from 'react-redux';
import About from './About';
import { withRouter } from 'react-router-dom';
import usersAPI from '../../../api/usersAPI';

import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';


class AboutContainer extends React.Component {

  api = new usersAPI();

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.myId;
    }

    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);

  }

  render() {
    return (
      <About {...this.props} updateStatus={this.props.updateUserStatus}/>
    );
  }

}

let mapStateToProps = (state) => {

  return {
    state: state.infoPage.aboutData,
    isFetching: state.infoPage.isFetching,
    status: state.infoPage.status,
    myId: state.auth.userId
  }

};

let mapDispatchToProps = (dispatch) => {

  return {
    getUserProfile: (userId) => {
      dispatch(getUserProfile(userId))
    },

    getUserStatus: (userId) => {
      dispatch(getUserStatus(userId))
    },

    updateUserStatus: (status) => {
      dispatch(updateUserStatus(status))
    }
  }

}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
  //withAuthRedirect
)(AboutContainer);