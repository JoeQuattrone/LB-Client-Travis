import React from 'react'

class SongSearch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      songTitle: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchSongs(this.state)
    this.setState({
      songTitle: ""
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <h3 id="home-title">Explore Our Enormous Database of Song Lyrics</h3>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="row">
            <div className="col s12 home-col">
              <input id="home-searchbar" type="text" name="songTitle" onChange={(e) => this.handleChange(e)} placeholder="Type song title" value={this.state.songTitle}/>
              <input id="home-search-btn" type="submit" value="SEARCH" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default SongSearch
