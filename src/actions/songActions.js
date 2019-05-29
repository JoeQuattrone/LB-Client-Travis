const axios = require('axios');
const BASE_URL = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/"
// const API_KEY = "&apikey=523ebe747e1a258aaddd09f97f90cb70"

export function fetchSongs(state, history) {
  debugger
  const url = BASE_URL + `track.search?q_track=${state.songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=523ebe747e1a258aaddd09f97f90cb70`
  return (dispatch) => {
    dispatch({ type: 'LOADING_SONG' })
    return axios.get(url)
      .then(res => res.data.message.body.track_list)
      .then(trackList => {
          if (history) {
            dispatch({ type: 'ADD_SONG', payload: trackList })
            history.push("/songs")
          } else {
            return  dispatch({ type: 'ADD_SONG', payload: trackList })
          }
      })
  }
}

export function fetchLyrics(trackId) {
  const url = BASE_URL + `track.lyrics.get?track_id=${trackId}&apikey=523ebe747e1a258aaddd09f97f90cb70`
    return (dispatch) => {
      dispatch({ type: 'LOADING_LYRICS' })
      return fetch(url)
        .then(res => res.json())
        .then(json => dispatch({ type: 'ADD_LYRICS', payload: json.message.body.lyrics }))
  }
}

export function fetchPopularSongs() {
  const url = 'http://localhost:3001/popular_songs'

  return (dispatch) => {
    dispatch({ type: 'LOADING_POPULAR_SONGS' })
    return fetch(url)
      .then(res => res.json())
      .then(json => dispatch({ type: 'ADD_POPULAR_SONGS', payload: json }))
  }
}

//
// const url = 'http://localhost:3001/popular_songs'

// https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=13873035&apikey=523ebe747e1a258aaddd09f97f90cb70`
