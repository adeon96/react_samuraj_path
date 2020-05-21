//import React from 'react';

import DialogsUsers from './DialogsUsers';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage.dialogsUsersData
  };
};

const DialogsUsersContainer = connect(mapStateToProps)(DialogsUsers);

export default DialogsUsersContainer;