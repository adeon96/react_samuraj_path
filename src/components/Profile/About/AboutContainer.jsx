import About from './About';

import { connect } from 'react-redux';



let mapStateToProps = (state) => {

  return {
    state: state.infoPage.aboutData
  }

};

const AboutContainer = connect(mapStateToProps)(About);

export default AboutContainer;