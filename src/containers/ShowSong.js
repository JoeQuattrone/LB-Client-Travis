import React from 'react'
import { connect } from 'react-redux'
import { fetchLyrics } from '../actions/songActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import logo from '../images/Ajax-loader.gif'

import LyricsWord from '../components/ShowSong/LyricsWord'


class ShowSong extends React.Component {
  state = {
    liked: false,
  }
// save lyrics in api via like and check my api before fetch
  componentDidMount() {
    this.props.fetchLyrics(this.props.match.params.songId)
  }

  //persist to rails api
  likeSong = (e) => {
    if (this.state.liked === false) {
      this.setState({
        liked: true
      })

      let data = {
        song: this.chooseSong(this.findSong(), this.findSongFromLocation())
      }
      fetch('http://localhost:3001/update_likes', {
        method: "POST",
        mode: 'cors',
        headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify(data)
      })
    }
  }

findSong = () => this.props.songs.find(song => song.track.track_id === parseInt(this.props.match.params.songId))

findSongFromLocation = () => this.props.location.state ? {track: this.props.location.state.song} : null

chooseSong = () => {
  return this.findSong() || this.findSongFromLocation()
}

  render() {
    let song = this.chooseSong()
    let lyrics = this.props.lyrics
    return (
      <div id="show-song-container" className="container">
        <LyricsWord />
        <div id="show-row" className="row">
          <h2 className=" col s10 song-header">{song ? song.track.track_name :  null }</h2>
          <div className="col s2 heart-div">
            {this.state.liked ?  <span><FontAwesomeIcon icon={faHeart}size="lg" className="heart-icon"  /></span>: <span onClick={e => this.likeSong(e)}><FontAwesomeIcon icon={farFaHeart}size="lg" className="heart-icon"  /></span>}
          </div>
        </div>

        <h4 id="show-artist-name">{song ? song.track.artist_name : null }</h4>
        <hr/>
        <div>
        {
          this.props.loading?
          <div className="center"><img src={logo} alt="loading img" /></div>
          :
          <p>{lyrics ? lyrics.lyrics_body : null}</p>
        }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songsReducer.songs,
    loading: state.songsReducer.loading,
    lyrics: state.songsReducer.lyrics
  }
}

ShowSong.defaultProps = {
  songs: [],
  lyrics: ""
}

export default connect(mapStateToProps, { fetchLyrics })(ShowSong)
