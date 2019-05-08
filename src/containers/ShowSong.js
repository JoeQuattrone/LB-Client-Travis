import React from 'react'
import { connect } from 'react-redux'
import { fetchLyrics } from '../actions/songActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


class ShowSong extends React.Component {

  state = {
    liked: false,
  }

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
        song: this.findSong()
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
  // songFromLocation? songFromLocaton.track.track_name :

findSong = () => this.props.songs.find(song => song.track.track_id === parseInt(this.props.match.params.songId))

chooseSong = (songFromProps, songFromLocaton) => {
  if (songFromProps) {
    return songFromProps
  } else if (songFromLocaton) {
    return songFromLocaton
  } else {
    return null
  }
}

  render() {
    let songFromProps = this.findSong()
    let songFromLocation = {track: this.props.location.state.song}
    let song = this.chooseSong(songFromProps, songFromLocation)
    let lyrics = this.props.lyrics

    return (
      <div className="container">
        <h5>Lyrics</h5>
        <div className="row">
          <h2 className=" col s10 song-header">{song ? song.track.track_name :  null }</h2>
          <div className="col s2 heart-div">
            {this.state.liked ?  <span><FontAwesomeIcon icon={faHeart}size="lg" className="heart-icon"  /></span>: <span onClick={e => this.likeSong(e)}><FontAwesomeIcon icon={farFaHeart}size="lg" className="heart-icon"  /></span>}
          </div>
        </div>

        <h4>{song ? song.track.artist_name : null }</h4>
        <hr/>
        <div className="InnerContainer">
          <p>{lyrics ? lyrics.lyrics_body : null}</p>
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
