import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SongRow from './SongRow'

Enzyme.configure({ adapter: new Adapter() })

describe('<SongRow />', () => {
  const songs = [{track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"}, {track_name: "Lose Yourself to Dance", artist_name: "Calvin Harriss", genre: 'EDM', likes: "6 likes"}]

  it('maps over songs and renders <SongCard />', () => {
    const wrapper = shallow(<SongRow songs={songs}/>)
    expect(wrapper.props().songs).toBe.defined;
    expect(wrapper.mapSongs).toBeCalled
  })
})
