import React from 'react'
import { connect } from 'react-redux'
import { fetchLyrics } from '../actions/songActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'


class ShowSong extends React.Component {

  componentDidMount() {
    fetchLyrics(this.props.match.params.songId)
  }

  render() {
    return (
      <div className="container">
        <h5>Lyrics</h5>
          <h1 className=" col s10 song-header"> Song Name</h1>
          <div className="float-right">
            <FontAwesomeIcon icon={farFaHeart}size="lg"  />
          </div>
        <h4>Artist Name</h4>
        <hr/>
        <div className="InnerContainer">
          <p>Lyrics</p>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    songs: state.songsReducer.songs,
    loading: state.songsReducer.loading
  }
}

export default connect(mapStateToProps, { fetchLyrics })(ShowSong)
