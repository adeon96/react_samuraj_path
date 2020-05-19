import React from 'react';

import About from './About';
import StoreContext from '../../../redux/StoreContext';

const AboutContainer = () => {

  return (

    <StoreContext.Consumer>
      {(store) => {
        return <About state={store.getState().profilePage.aboutData} />;
      }}
    </StoreContext.Consumer>


  );
};

export default AboutContainer;