import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList(){
    return this.props.songs.map((song) => {
    return (
      <div key={song.title}>
      <div className="item" ></div>
      <div className="btn btn-outline-dark">Select </div>
      <div className="">{song.title}</div>
      </div>

      )
    })
  }

  render (){
    return (
      <div>
      {this.renderList()}
    </div>
    )

  }
}

const mapStateToProps = (state) => {

  return { songs: state.songs };

}

export default connect(mapStateToProps, {
  selectSong: selectSong
})(SongList);
