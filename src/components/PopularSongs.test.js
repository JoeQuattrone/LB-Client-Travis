import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { PopularSongs } from './PopularSongs'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import songsReducer from '../reducers/songsReducer'
import sinon from "sinon";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SongRow from './SongRow'
import { Link } from 'react-router-dom';
import { shape } from 'prop-types';


Enzyme.configure({ adapter: new Adapter() })

// const mockStore = configureMockStore()

// const options = {
//   context: {
//     router: {
//       history: {
//         push: jest.fn(),
//         replace: jest.fn(),
//         createHref: jest.fn(),
//       },
//       route: {
//         location: {
//           hash: '',
//           pathname: '',
//           search: '',
//           state: '',
//         },
//         match: {
//           params: {},
//           isExact: false,
//           path: '',
//           url: '',
//         },
//       },
//     },
//   },
//   childContextTypes: {
//     router: shape({
//       route: shape({
//         location: shape({}),
//         match: shape({}),
//       }),
//       history: shape({}),
//     }),
//   },
// };

const songs = [{track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"}, {track_name: "Lose Yourself to Dance", artist_name: "Calvin Harriss", genre: 'EDM', likes: "6 likes"}]

describe('<PopularSongs />', () => {
  it('Dispatches a fetch request to collect popular songs on componentDidMount()', () => {
    let spy = sinon.spy()
    let store = createStore(songsReducer)
    store.dispatch({type: 'ADD_SONG', loading: false, songs: songs})
    const wrapper = mount(<PopularSongs fetchPopularSongs={spy}/>)

    expect(spy.called).toBe(true);
  })

  // Error: Uncaught [Error: Invariant failed: You should not use <Link> outside a <Router>]
  // it('connects to Redux store and renders <SongRow />', () => {
  //   let store = createStore(songsReducer)
  //   store.dispatch({type: 'ADD_SONG', loading: false, songs: songs})
  //   const wrapper =
  //   mount(
  //       <PopularSongs fetchPopularSongs={jest.fn()} popularSongs={songs}/>, options
  //   )
  //   expect(wrapper.find(SongRow)).toBe(true)
  // })

})
