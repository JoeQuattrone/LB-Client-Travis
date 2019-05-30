import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SongSearch from './SongSearch'

Enzyme.configure({ adapter: new Adapter() })

describe('<SongSearch />', () => {
  it('has default state {songTitle: ""}', () => {
    const wrapper = shallow(<SongSearch />)
    expect(wrapper.state().songTitle).toEqual('')
  })
})

  // Enzyme does not support event propigation
  // it('should pass form input to state.songTitle', () => {
  //   const searchSongs = jest.fn()
  //   const wrapper = shallow(<SongSearch searchSongs={searchSongs}/>)
  //     wrapper.find('form')
  //     .simulate('submit', { target: { value: "foo" }})
  //
  //   expect(wrapper.props().handleSubmit).toHaveBeenCalled()
  //   expect(wrapper.props().searchSongs).toHaveBeenCalled()
  // })

describe('<SongSearch />', () => {
  it("should save the songTitle in state when the input changes", () => {
    const wrapper = shallow(<SongSearch />)

    wrapper.find("#home-searchbar")
      .simulate("change", {
      target: { name: "songTitle", id: "#home-searchbar", value: "Lose Yourself" }
    });
    expect(wrapper.state().songTitle).toBe("Lose Yourself");
  });
})
