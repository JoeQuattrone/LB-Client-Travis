import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './songActions'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import nock from 'nock'
import fetch from 'isomorphic-fetch';

// change to redux thunk
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
const state = {songTitle: "Lose Yourself"}
const BASE_URL = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/"
const mockSongQuery = `track.search?q_track=${state.songTitle}&page_size=10&page=1&s_track_rating=desc&apikey=523ebe747e1a258aaddd09f97f90cb70`


describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })
  it('expects true to equal true', () => {
    expect(true).toBe(true)
  })


  it('uses redux-promise to create an action object with type of "ADD_SONG" and a payload of songs when fetchSongs is dispatched', () => {
    nock(BASE_URL)
      .get(mockSongQuery)
      .reply(200,
        {
          trackList: [ {track: {artist_name: "Eminem", track_name: "Lose Yourself"}}, {track: {artist_name: "Daft Punk feat. Pharrell Williams", track_name: "Lose Yourself to Dance"}} ]
        })
    })

    const expectedActions = [
      {type: 'LOADING_SONG'},
      { type: "ADD_SONG", payload: [
        {track: {artist_name: "Eminem", track_name: "Lose Yourself"}}, {track: {artist_name: "Daft Punk feat. Pharrell Williams", track_name: "Lose Yourself to Dance"}}
      ] }
    ]

    const store = mockStore({})
    global.fetch = fetch

    return store.dispatch(actions.fetchSongs(state))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
})
