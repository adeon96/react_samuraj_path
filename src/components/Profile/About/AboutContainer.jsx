import React from 'react';
import { setProfileDataAC, setProfileDataFetchingAC } from '../../../redux/aboutReducer';

import { connect } from 'react-redux';
import About from './About';
import { withRouter } from 'react-router-dom';
import usersAPI from '../../../api/usersAPI';


class AboutContainer extends React.Component {

  api = new usersAPI();

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {

      this.props.setProfileDataFetching(true);

      //find out my id and setting my profile
      this.api.authorizeUser()
        .then(response => {
          if (response.resultCode === 0) {
            userId = response.data.id;

            this.api.getUserProfile(userId)
              .then(data => {
                this.props.setProfileData(data);
              })
          }

          this.props.setProfileDataFetching(false);
        })

      return;
    }

    this.props.setProfileDataFetching(true);

    this.api.getUserProfile(userId)
      .then(data => {
        this.props.setProfileData(data);
        this.props.setProfileDataFetching(false);
      })
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