import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export const withAuthRedirect = (Component) => {

  let withAuthRedirectComponent = (props) => {
    if(!props.isAuth) {
      return <Redirect to='/login' />
    }

    return <Component {...props} />
  }

  //necessary props from store
  let ConnectedComponent = connect(mapStateToPropsForRedirect)(withAuthRedirectComponent);

  return ConnectedComponent;
}