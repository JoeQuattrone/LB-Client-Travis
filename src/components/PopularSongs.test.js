import React from 'react'
import Enzyme, { shallow, mount, render, dive } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { PopularSongs } from './PopularSongs'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import songsReducer from '../reducers/songsReducer'
import combineReducers from '../reducers/index'
import sinon from "sinon";
import SongRow from './SongRow'
import App from '../App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

Enzyme.configure({ adapter: new Adapter() })

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const songs = [{1: "song1"}, {2: "song2"}, {3: "song3"}, {4: "song4"}, {5: "song5"}, {6: "song6"}]

describe('<PopularSongs />', () => {
  it('Dispatches a fetch request to collect popular songs on componentDidMount()', () => {
    let spy = sinon.spy()
    const wrapper = shallow(<PopularSongs fetchPopularSongs={spy}/>)

    expect(spy.called).toBe(true);
  })

  it('It stores popular songs in Redux store', () => {
    let store = mockStore(songsReducer)
    store.dispatch({type: 'ADD_POPULAR_SONGS', loading: false, popularSongs: songs})

    const actions = store.getActions()[0]
    expect(actions.popularSongs).toEqual(songs)
  })

  it('renders <SongRow /> twice', () => {
    const wrapper = shallow(<PopularSongs fetchPopularSongs={jest.fn()} popularSongs={songs}/>)

    expect(wrapper.find(SongRow)).toHaveLength(2)
  })
})
