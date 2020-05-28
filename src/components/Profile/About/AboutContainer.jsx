//import React from 'react';

import About from './About';

import { connect } from 'react-redux';

//debugger;


let mapStateToProps = (state) => {

  //debugger;

  console.log("About mstp");

  return {
    state: state.infoPage.aboutData
  }

};

//debugger;
const AboutContainer = connect(mapStateToProps)(About);

export default AboutContainer;