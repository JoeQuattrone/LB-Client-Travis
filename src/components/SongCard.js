import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

class SongCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      liked: false,
      likes: props.song.likes
    }
  }

  likeSong = (e) => {
    if (this.state.liked === false) {
      this.setState({
        liked: true,
        likes: this.state.likes + 1
      })

      let data = {
        song: this.props.song
      }
      fetch('http://localhost:3001/update_likes_from_home', {
        method: "POST",
        mode: 'cors',
        headers: {
           "Content-Type": "application/json",
       },
       body: JSON.stringify(data)
     })
    }
  }

  render() {
    const song = this.props.song.track ? this.props.song.track : this.props.song

    return (
      <div className="col s12 m6 l4">
        <div className="card">
          <Link
            to={{
              pathname: 'songs/'+ song.track_id,
              state: { song: song}
            }} >
            <div className="card-content white-text">
              <span className="card-title">{song.track_name}</span>
              <p>{song.artist_name}</p>
              <p>{song.genre}</p>
              <p>{this.state.likes} likes</p>
            </div>
          </Link>
          <div className="card-action">
            <Link
              to={{
                pathname: 'songs/'+ song.track_id,
                state: { song: song}
              }} >LIKE THIS SONG</Link>
            {this.state.liked ? <span><FontAwesomeIcon icon={faHeart}size="lg" className="heart-icon white-text right"  /></span> :
            <span onClick={e => this.likeSong(e)}><FontAwesomeIcon id={song.id} icon={farFaHeart}size="lg" className="heart-icon white-text right"  /></span>}
          </div>
        </div>
      </div>
    )
  }
}

export default SongCard
