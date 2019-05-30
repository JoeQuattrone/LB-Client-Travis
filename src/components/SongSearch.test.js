import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import SongSearch from './SongSearch'
import sinon from "sinon";


Enzyme.configure({ adapter: new Adapter() })

describe('<SongSearch />', () => {
  it('has default state {songTitle: ""}', () => {
    const wrapper = shallow(<SongSearch />)
    expect(wrapper.state().songTitle).toEqual('')
  })

  it("should save the songTitle in state when the input changes", () => {
    const wrapper = shallow(<SongSearch />)

    wrapper.find("#home-searchbar")
      .simulate("change", {
      target: { name: "songTitle", id: "#home-searchbar", value: "Lose Yourself" }
    });
    expect(wrapper.state().songTitle).toBe("Lose Yourself");
  });

  it("should call the `searchSongs` callback prop when the form is being submitted", () => {
      let spy = sinon.spy()
      const wrapper = shallow(<SongSearch searchSongs={spy} />);
      wrapper.find("#home-searchbar").simulate("change", {
        target: { name: "songTitle", id: "#home-searchbar", value: "Lose Yourself" }
      });
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      expect(spy.called).toBe(true)
    });
  });
