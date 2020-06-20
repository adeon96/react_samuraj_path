import React from 'react';
import { getUserProfile } from '../../../redux/aboutReducer';

import { connect } from 'react-redux';
import About from './About';
import { withRouter } from 'react-router-dom';
import usersAPI from '../../../api/usersAPI';

import { withAuthRedirect } from '../../../hoc/withAuthRedirect';


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

//Container component around AboutContainer
//with Redirect logic
let AuthRedirectComponent = withAuthRedirect(AboutContainer);

let mapStateToProps = (state) => {

  return {
    state: state.infoPage.aboutData,
    isFetching: state.infoPage.isFetching,
    myId: state.auth.userId
  }

};

let mapDispatchToProps = (dispatch) => {

  return {
    getUserProfile: (userId) => {
      dispatch(getUserProfile(userId))
    }
  }

}

let aboutContainerWithUrlParam = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, mapDispatchToProps)(aboutContainerWithUrlParam);