import React from 'react'
import { connect } from 'react-redux'
import ListSong from '../components/Songs/ListSong'
import loading from '../images/Ajax-loader.gif'

class Songs extends React.Component {
  // maps over songs in redux and return <ListSong /> components
  listSongs = () => {
    return(
      this.props.songs.map(song => <ListSong key={song.track.track_id} song={song} link={`${this.props.match.url}/${song.track.track_id}`} />)
    )
  }

  render() {
    return (
      <div className="container">
        <p className="p-text">Search results for <span className="bold"> {localStorage.getItem("songTitle")}</span></p>

          <h6 id="tracks-title">TRACKS</h6>
          {
            this.props.loading?
            <div className="center"><img src={loading} alt="loading img" /></div>
            :
            <div className="row search-results-container">{this.listSongs()}</div>
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {songs: state.songsReducer.songs}
}

// Songs.defaultProps = {songs: []}

export default connect(mapStateToProps)(Songs)
