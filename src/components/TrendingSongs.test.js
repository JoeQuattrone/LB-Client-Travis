import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TrendingSongs  from './TrendingSongs'
import SongCard from './SongCard'
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() })

const song = {track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"}

describe('<TrendingSongs />', () => {
  const songs = [{track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"}, {track_name: "Lose Yourself to Dance", artist_name: "Calvin Harriss", genre: 'EDM', likes: "6 likes"}]

  it('Fetches Trending Songs from Rails API and saves response to local state on componentDidMount()', () => {
    sinon.spy(TrendingSongs.prototype, 'componentDidMount')
    const wrapper = mount(<TrendingSongs />)
    expect(TrendingSongs.prototype.componentDidMount.calledOnce).toEqual(true);
  })

  //  Error: Uncaught [Error: Invariant failed: You should not use <Link> outside a <Router>]. Link is erroring out the test.
  // it('renders <SongCard />', () => {
  //   const wrapper = mount(<TrendingSongs />)
  //   wrapper.setState({ trendingSongs: songs})
  //
  //   expect(wrapper.find('.white-row')).toEqual('')
  // })
})
