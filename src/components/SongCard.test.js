import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SongCard from './SongCard'

Enzyme.configure({ adapter: new Adapter() })

describe('<SongCard />', () => {
  const song = {track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"}

  it('renders the song name, artist name, genre, and likes for a given song', () => {
    const wrapper = shallow(<SongCard song={song}/>)
    expect(wrapper.find('.card-title').text()).toEqual(song.track_name)
    expect(wrapper.find('p').first().text()).toEqual(song.artist_name)
    expect(wrapper.find('p').slice(1,2).text()).toEqual(song.genre)
    expect(wrapper.find('p').last().text()).toContain(song.likes)
    expect(true).toBe(true)
  })
})
