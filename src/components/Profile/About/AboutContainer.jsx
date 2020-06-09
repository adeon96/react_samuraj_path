import React from 'react';
import {setProfileDataAC, setProfileDataFetchingAC} from '../../../redux/aboutReducer';

import { connect } from 'react-redux';
import * as axios from 'axios';
import About from './About';


class AboutContainer extends React.Component {

  componentDidMount() {

    this.props.setProfileDataFetching(true);
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/10')
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);