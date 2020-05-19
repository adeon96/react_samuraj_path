import React from 'react';

import DialogsUsers from './DialogsUsers';
import StoreContext from '../../../redux/StoreContext';

const DialogsUsersContainer = () => {

  return(

    <StoreContext.Consumer>
      {(store) => {
        return <DialogsUsers state={store.getState().dialogsPage.dialogsUsersData} />;
      }}
    </StoreContext.Consumer>
    
  );
};

export default DialogsUsersContainer;