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


const App = () => {

  return (

    <div className='app__wrapper'>
      <Header />
      <Sidebar />
      <div className='app__wrapper__content'>
        <Route path='/profile' render={() =>
          <Profile /> }
        />

        <Route path='/dialogs' render={() =>
          <Dialogs />
        } />

        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>

  );
}

export default App;
