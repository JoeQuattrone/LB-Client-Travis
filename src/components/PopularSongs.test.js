import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { PopularSongs } from './PopularSongs'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore()

Enzyme.configure({ adapter: new Adapter() })

describe('<PopularSongs />', () => {
  const songs = [{track_name: "Lose Yourself", artist_name: "Eminem", genre: 'rap', likes: "5 likes"}, {track_name: "Lose Yourself to Dance", artist_name: "Calvin Harriss", genre: 'EDM', likes: "6 likes"}]

  it('Connects to Redux store and renders <SongRow />', () => {
    const store = mockStore({})
    const wrapper = shallow(<PopularSongs fetchPopularSongs={jest.fn()}/>)
    expect(wrapper.props().popularSongs).toBe.defined;
    expect(wrapper.props().popularSongs).toBeCalled
    expect(wrapper.props().fetchPopularSongs).toBeCalled
  })
})
