import React from 'react';
import Index from '../actions/index';
import {selectSong} from '../actions/index';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () =>{
  return (
    <div className="container">

      <h1>Hello Songs</h1>
      <SongList />
      <SongDetail />
    </div>
    )
}

export default App
