import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './songActions'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import fetchMock from 'fetch-mock'
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const BASE_URL =  "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/"
const key = '523ebe747e1a258aaddd09f97f90cb70'

describe('fetchSongs action', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  const state = {songTitle: "Lose Yourself"}

  it('uses redux-promise to create an action object with type of "ADD_SONG" and a payload of songs when fetchSongs is dispatched', () => {
    const mockSongQuery = `track.search?q_track=${state.songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${key}`
    const url = BASE_URL + mockSongQuery
    const songs = [
      {track: {artist_name: "Eminem", track_name: "Lose Yourself"}},
      {track: {artist_name: "Daft Punk feat. Pharrell Williams", track_name: "Lose Yourself to Dance"}}
    ]

    fetchMock.getOnce(url, {
        message: {
          header: {},
          body: {
            track_list: songs
          }
        }
    })

    const expectedActions = [
      {type: 'LOADING_SONG'},
      {type: "ADD_SONG", payload: songs}
    ]

    const store = mockStore({})

    return store.dispatch(actions.fetchSongs(state))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})

describe('fetchLyrics action', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  // Track Id to "Lose Yourself" by Eminem
  const trackId = 1809819

  it('uses redux-promise to create an action object with type of "ADD_LYRICS" and a payload of lyrics to a song when fetchLyrics is dispatched', () => {
    const mockLyricsQuery = `track.lyrics.get?track_id=${trackId}&apikey=${key}`
    const url = BASE_URL + mockLyricsQuery
    const lyrics = {lyrics: { lyrics_body: "Look if you had one shot, would you capture it or just let it slip...", lyrics_id: 16023263 }}


    fetchMock.getOnce(url, {
      message: {
        header: {},
        body: lyrics
      }
    })

    const expectedActions = [
      {type: 'LOADING_LYRICS'},
      {type: "ADD_LYRICS", payload: lyrics.lyrics}
    ]

    const store = mockStore({})

    return store.dispatch(actions.fetchLyrics(trackId))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})

describe('fetchPopularSongs action', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('uses redux-promise to create an action object with type of "ADD_POPULAR_SONGS" and a payload of popular songs when fetchPopularSongs is dispatched', () => {
    const url = 'http://localhost:3001/popular_songs'
    const songs =   [{1: "song1"}, {2: "song2"}, {3: "song3"}, {4: "song4"}, {5: "song5"}, {6: "song6"}]

    fetchMock.getOnce(url, {
        body: songs
    })

    const expectedActions = [
      {type: 'LOADING_POPULAR_SONGS'},
      {type: "ADD_POPULAR_SONGS", payload: songs
      }]

    const store = mockStore({})

    return store.dispatch(actions.fetchPopularSongs())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})
