import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'No Scrubs', durstion: '4:05'},
    {title: 'Oops I did it again', duration: '2:30'},
    {title: 'I want it that way', duration: '3:05'},
    {title: 'beautiful in whote', duration: '4:03'}
  ];
};

const selectedSongReducer = (selectedSong = null, action)=>{
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
