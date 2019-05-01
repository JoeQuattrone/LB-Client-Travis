import React from 'react'
import SongSearch from '../components/SongSearch'
import { connect } from 'react-redux'
import { fetchSongs } from '../actions/songActions'
import  Songs  from './Songs'
import { Redirect } from 'react-router-dom'
class Home extends React.Component {

  searchSongs = (state) => {
    this.props.fetchSongs(state)
  }

  renderSongs = () => {
    if (this.props.songs.length > 0) {
      return  <Redirect to={{
        pathname: '/songs',
        state: { songs: this.props.songs }
      }} />
      // window.history.pushState(this.props.songs, "songs", "/songs")
      // return <Songs songs={this.props.songs}/>
    }
  }

  render() {
    return (
      <div className="Home">
        <SongSearch searchSongs={this.searchSongs}/>
        {this.renderSongs()}
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    add_Song: song => dispatch({type: "ADD_SONG", payload: song})
  }
}

const mapStateToProps = (state) => {
  return {
    songs: state.songsReducer.songs,
    loading: state.songsReducer.loading
  }
}



export default connect(mapStateToProps, { fetchSongs })(Home)
