import React from 'react';
import './App.css';
import ShowProfiles from './Components/ShowProfiles';
import { profilesData } from './Constants/ProfilesData';

function App() {
  return (
    <div className="App">
      <ShowProfiles profiles={profilesData} />
    </div>
  );
}

export default App;
