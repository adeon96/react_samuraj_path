import React from 'react';
import {setProfileDataAC, setProfileDataFetchingAC} from '../../../redux/aboutReducer';

import { connect } from 'react-redux';
import * as axios from 'axios';
import About from './About';
import { withRouter } from 'react-router-dom';


class AboutContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }

    this.props.setProfileDataFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
    .then(response => {
      this.props.setProfileData(response.data);
      this.props.setProfileDataFetching(false);
    });
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
    setProfileData: (data) => {
      dispatch(setProfileDataAC(data));
    },

    setProfileDataFetching: (fetchingFlag) => {
      dispatch(setProfileDataFetchingAC(fetchingFlag));
    }
  }

}

let aboutContainerWithUrlParam = withRouter(AboutContainer);

export default connect(mapStateToProps, mapDispatchToProps)(aboutContainerWithUrlParam);