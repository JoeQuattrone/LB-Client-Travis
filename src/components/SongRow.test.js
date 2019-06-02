import React from 'react'
import Enzyme, { render, shallow, mount, instance } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SongRow from './SongRow'
import SongCard from './SongCard'
import sinon from "sinon";

Enzyme.configure({ adapter: new Adapter() })

describe('<SongRow />', () => {
  const songs = [
    {track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"},
    {track_name: "Lose Yourself to Dance", artist_name: "Calvin Harriss", genre: 'EDM', likes: "6 likes"}
  ]

  // can't mount SongRow because of link from songcard
  it('maps over songs and renders <SongCard />', () => {
    const wrapper = shallow(<SongRow songs={songs} />)
    const expected = <SongCard song={songs[0]} key={0}/>
    
    expect(wrapper.props().children[0]).toEqual(expected);
  })
})
