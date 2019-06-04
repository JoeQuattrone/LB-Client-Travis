import React from 'react'
import SongSearch from '../components/SongSearch'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions/songActions'
import TrendingSongs from '../components/TrendingSongs'
import PopularSongs from '../components/PopularSongs'

class Home extends React.Component {
// fetch songs and save song title to state
  searchSongs = (state) => {
    localStorage.setItem("songTitle", state.songTitle)
    this.props.fetchSongs(state, this.props.history)
  }

  render() {
    return (
        <div className="Home">
          <SongSearch searchSongs={this.searchSongs}/>
          <div className="white-background">
            <div className="container">
              <TrendingSongs />
              <PopularSongs />
            </div>
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



export default connect(mapStateToProps, { fetchSongs })(Home)
