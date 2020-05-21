//import React from 'react';

import About from './About';

import { connect } from 'react-redux';


let mapStateToProps = (state) => {

  return {
    state: state.profilePage.aboutData
  }

};

const AboutContainer = connect(mapStateToProps)(About);

export default AboutContainer;