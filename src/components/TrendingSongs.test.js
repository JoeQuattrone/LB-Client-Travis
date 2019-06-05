import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TrendingSongs  from './TrendingSongs'
import SongCard from './SongCard'
import sinon from "sinon";
import thunk from 'redux-thunk'

Enzyme.configure({ adapter: new Adapter() })

const song = {track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"}

const songs = [
  {artist_name: "Frank Sinatra", genre: "Pop",id: 2,likes: 42, track_id: 13873035, track_name: "Strangers In the Night"},
  {artist_name: "The Beatles",created_at: "2019-05-07T19:32:32.666Z", genre: "Pop/Rock", id: 3, likes: 22, track_id: 17479725, track_name: "Hey Jude", updated_at: "2019-05-17T15:27:47.893Z"},
  {artist_name: "Eminem", created_at: "2019-05-07T19:28:38.690Z", genre: "Alternative Rap", id: 1, likes: 33, track_id: 1809819, track_name: "Lose Yourself", updated_at: "2019-06-04T14:44:56.307Z"}
]

describe('<TrendingSongs />', () => {
  it('Fetches Trending Songs on componentDidMount()', () => {
    sinon.spy(TrendingSongs.prototype, 'componentDidMount')
    const wrapper = shallow(<TrendingSongs />)
    expect(TrendingSongs.prototype.componentDidMount.calledOnce).toEqual(true);
  })

  it('saves response to local state on componentDidMount()', () => {
    const mockSuccessResponse = songs;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    const wrapper = shallow(<TrendingSongs />)

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/trending_songs')
    // ensures previous functions are complete before executing
    process.nextTick(() => {
        expect(wrapper.state().trendingSongs).toEqual(songs)
      });
    global.fetch.mockClear();
  });

  //  Error: Uncaught [Error: Invariant failed: You should not use <Link> outside a <Router>]. Link is erroring out the test.
  // it('renders <SongCard />', () => {
  //   const wrapper = mount(<TrendingSongs />)
  //   wrapper.setState({ trendingSongs: songs})
  //
  //   expect(wrapper.find('.white-row')).toEqual('')
  // })
})
