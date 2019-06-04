import React from 'react'
import { connect } from 'react-redux'
import { fetchLyrics } from '../actions/songActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import loading from '../images/Ajax-loader.gif'


class ShowSong extends React.Component {
  state = {
    liked: false,
  }

  componentDidMount() {
    this.props.fetchLyrics(this.props.match.params.songId)
  }

  // persist to rails api
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
// find songs from redux store
findSong = () => this.props.songs.find(song => song.track.track_id === parseInt(this.props.match.params.songId))

// find songs from SongCard link
findSongFromLocation = () => this.props.location.state ? {track: this.props.location.state.song} : null

chooseSong = () => {
  return this.findSong() || this.findSongFromLocation()
}

  render() {
    // Use default song until chooseSong returns a song
    let song = this.chooseSong() || this.props.song
    let lyrics = this.props.lyrics
    return (
      <div id="show-song-container" className="container">
        <h5 className="lyrics-title">Lyrics</h5>
        <div id="show-row" className="row">
          <h2 className=" col s10 song-header">{song.track.track_name }</h2>
          <div className="col s2 heart-div">
            {this.state.liked ?  <span><FontAwesomeIcon icon={faHeart}size="lg" className="heart-icon"  /></span>
            :
            <span onClick={e => this.likeSong(e)}><FontAwesomeIcon icon={farFaHeart}size="lg" className="heart-icon"  /></span>}
          </div>
        </div>

        <h4 id="show-artist-name">{song.track.artist_name}</h4>
        <hr/>
        <div>
        {
          this.props.loading?
          <div className="center"><img src={loading} alt="loading img" /></div>
          :
          <p>{lyrics.lyrics_body}</p>
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
  song: {track: {artist_name: "", track_name: ""}},
  songs: [],
  lyrics: {lyrircs_body: ""}
}

export default connect(mapStateToProps, { fetchLyrics })(ShowSong)
