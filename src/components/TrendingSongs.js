import React from 'react'
import SongCard from './SongCard'
import loading from '../images/Ajax-loader.gif'

class TrendingSongs extends React.Component {
  state = {
    trendingSongs: []
  }

  fetchTrendingSongs = () => {
    fetch('http://localhost:3001/trending_songs')
      .then(res => res.json())
      .then(json => this.setState({
        trendingSongs: json
      }))
  }
  componentDidMount() {
    this.fetchTrendingSongs()
  }

  renderTrendingSongs = () => {
    return this.state.trendingSongs.map((song, id) => <SongCard key={id} song={song} />)
  }

  render() {
    return (
      <>
        <h4 className="home-heading">Most liked songs</h4>
        {
          this.state.trendingSongs.length === 0 ? <div className="center"><img src={loading} alt="loading img"/></div>
        :
          <div className="row white-row">{this.renderTrendingSongs()}</div>
        }
      </>
    )
  }
}

export default TrendingSongs
