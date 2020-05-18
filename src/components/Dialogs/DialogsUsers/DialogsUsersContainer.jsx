import React from 'react';

import DialogsUsers from './DialogsUsers';

const DialogsUsersContainer = (props) => {
  let state = props.store.getState();

  return(
    <DialogsUsers state={state.dialogsPage.dialogsUsersData} />
  );
};

export default DialogsUsersContainer;