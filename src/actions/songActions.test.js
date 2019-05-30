import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './songActions'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import fetchMock from 'fetch-mock'

// change to redux thunk
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const BASE_URL = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/"


describe('fetchSongs action', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  const state = {songTitle: "Lose Yourself"}

  it('uses redux-promise to create an action object with type of "ADD_SONG" and a payload of songs when fetchSongs is dispatched', () => {
    const mockSongQuery = `track.search?q_track=${state.songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=523ebe747e1a258aaddd09f97f90cb70`

    const url = BASE_URL + mockSongQuery

    fetchMock.getOnce(url, {
      data: {
        message: {
          header: {},
          body: {
            track_List: [
              {track: {artist_name: "Eminem", track_name: "Lose Yourself"}},
              {track: {artist_name: "Daft Punk feat. Pharrell Williams", track_name: "Lose Yourself to Dance"}}
            ]
          }
        }
      }
    })



    const expectedActions = [
      {type: 'LOADING_SONG'},
      {type: "ADD_SONG", payload: [
        {track: {artist_name: "Eminem", track_name: "Lose Yourself"}}, {track: {artist_name: "Daft Punk feat. Pharrell Williams", track_name: "Lose Yourself to Dance"}}
      ]}
    ]

    const store = mockStore({})
    global.fetch = fetch

    return store.dispatch(actions.fetchSongs(state))
      .then(() => { // return of async actions
        expect(store.getActions()).toHaveLength(2)
      })
  })
})

describe('fetchLyrics action', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  const trackId = 1809819

  it('uses redux-promise to create an action object with type of "ADD_LYRICS" and a payload of songs when fetchLyrics is dispatched', () => {
    const mockLyricsQuery = `track.lyrics.get?track_id=${trackId}&apikey=523ebe747e1a258aaddd09f97f90cb70`
    const url = BASE_URL + mockLyricsQuery

    fetchMock.getOnce(url, {
      message: {
        header: {},
        body: {
          lyrics: { lyrics_body: "Look if you had one shot, would you capture it or just let it slip...", lyrics_id: 16023263 }
        }
      }
    })

    const expectedActions = [
      {type: 'LOADING_LYRICS'},
      {type: "ADD_LYRICS", payload:
        { lyrics_body: "Look if you had one shot, would you capture it or just let it slip...", lyrics_id: 16023263 }
      }]

    const store = mockStore({})
    global.fetch = fetch

    return store.dispatch(actions.fetchLyrics(trackId))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
})
