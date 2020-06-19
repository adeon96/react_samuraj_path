import React from 'react';
import { getUserProfile } from '../../../redux/aboutReducer';

import { connect } from 'react-redux';
import About from './About';
import { withRouter } from 'react-router-dom';
import usersAPI from '../../../api/usersAPI';


class AboutContainer extends React.Component {

  api = new usersAPI();

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.myId;
    }

    this.props.getUserProfile(userId);

  }

  render() {

    return (
      <About {...this.props} />
    );
  }

}

let mapStateToProps = (state) => {

  return {
    state: state.infoPage.aboutData,
    isFetching: state.infoPage.isFetching,
    myId: state.auth.userId,
    isAuth: state.auth.isAuth
  }

};

let mapDispatchToProps = (dispatch) => {

  return {
    getUserProfile: (userId) => {
      dispatch(getUserProfile(userId))
    }
  }

}

let aboutContainerWithUrlParam = withRouter(AboutContainer);

export default connect(mapStateToProps, mapDispatchToProps)(aboutContainerWithUrlParam);