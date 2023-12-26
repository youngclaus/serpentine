import React from 'react';
import './App.css';
import TitleAnimation from './Components/title/title.js'
import FriendSearchComponent from './Components/search/searchbar.js';
import { SpotifyLoginComponent } from './Components/authentication/login.js';

function App() {
  return (
    <div className='background'>
      <div className="title-text">
        <TitleAnimation/>
      </div>
      <div className="auth_button">
        <SpotifyLoginComponent/>
      </div>
      <div>
        <FriendSearchComponent/>
      </div>
    </div>
  );
}

export default App;
