import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ListSong from './ListSong'

Enzyme.configure({ adapter: new Adapter() })

describe('<ListSong />', () => {
  const song =  {track: {track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"} }

  it('renders the name of the song and link to the song', () => {
    const wrapper = shallow(<ListSong song={song} link={'https://example.com'}/>)
    expect(wrapper.find('Link').hasClass('song-link')).toBe(true)
    expect(wrapper.find('p').text()).toEqual(song.track.artist_name)
  })
})
