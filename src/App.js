import React from 'react';
import './App.css';

import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import UsersContainer from './components/Users/UsersContainer';

import { Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader';


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if(this.props.isInitialized === false) {
      return <Preloader />
    }

    return (
      <div className='app__wrapper'>
        <HeaderContainer />
        <Sidebar />
        <div className='app__wrapper__content'>
          <Route path='/profile/:userId?' render={() =>
            <Profile />}
          />

          <Route path='/dialogs' render={() =>
            <Dialogs />
          } />

          <Route path='/users' render={() =>
            <UsersContainer />
          } />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />

          <Route path='/login' render={() => <LoginPage />} />
        </div>
      </div>
    );

  }
}

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.initialized
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    initializeApp: () => {
      dispatch(initializeApp())
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
