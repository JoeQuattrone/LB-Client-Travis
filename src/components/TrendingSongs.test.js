import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TrendingSongs  from './TrendingSongs'
import SongCard from './SongCard'

Enzyme.configure({ adapter: new Adapter() })

const song = {track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"}

describe('<TrendingSongs />', () => {
  const songs = [{track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"}, {track_name: "Lose Yourself to Dance", artist_name: "Calvin Harriss", genre: 'EDM', likes: "6 likes"}]

  it('Fetches Trending Songs from Rails API, saves response to local state and renders <SongCard />', () => {
    const wrapper = shallow(<TrendingSongs />)
    wrapper.setState({ trendingSongs: songs})
    wrapper.instance().renderTrendingSongs()
    expect(wrapper.props().renderTrendingSongs).toBeCalled;
    expect(wrapper.state('trendingSongs')).toEqual(songs)
  })
})
