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
    this.props.getUserProfile(userId);

  }

  render() {

    return (
      <About state={this.props.state} isFetching={this.props.isFetching} />
    );
  }

}

let mapStateToProps = (state) => {

  return {
    state: state.infoPage.aboutData,
    isFetching: state.infoPage.isFetching
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