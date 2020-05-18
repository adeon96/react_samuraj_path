import React from 'react';

import About from './About';

const AboutContainer = (props) => {
  let state = props.store.getState();

  return(
    <About state={state.profilePage.aboutData} />
  );
};

export default AboutContainer;