import React from 'react'
import { connect } from 'react-redux'
import { fetchPopularSongs } from '../actions/songActions'
import SongRow from './SongRow'

export class PopularSongs extends React.Component {
  componentDidMount() {
    this.props.fetchPopularSongs()
  }

  render() {
    return (
      <>
        <h4 className="home-heading">Chart Topping Songs</h4>
        {
          this.props.popularSongs &&
          <>
            <SongRow songs={this.props.popularSongs.slice(0, 3)} />
            <SongRow songs={this.props.popularSongs.slice(3)} />
          </>
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    popularSongs: state.songsReducer.popularSongs
  }
}

export default connect(mapStateToProps, { fetchPopularSongs })(PopularSongs)
