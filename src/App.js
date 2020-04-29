import React from 'react';
import './App.css';

import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <Header />
        <Sidebar />
        <div className='app__wrapper__content'>
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />

          <Route path='/dialogs' render={() => 
            <Dialogs users={props.users} my_messages={props.my_messages} other_messages={props.other_messages} />}/>

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
