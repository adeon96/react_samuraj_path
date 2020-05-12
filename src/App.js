import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { Route } from 'react-router-dom';


const App = (props) => {
  window.props = props;

  return (

    <div className='app__wrapper'>
      <Header />
      <Sidebar />
      <div className='app__wrapper__content'>
        <Route path='/profile' render={() =>
          <Profile state={props.state.profilePage} dispatch={props.dispatch} /> }
        />

        <Route path='/dialogs' render={() =>
          <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />
        } />

        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>

  );
}

export default App;
