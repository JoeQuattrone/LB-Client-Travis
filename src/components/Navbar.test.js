import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from './Navbar'

Enzyme.configure({ adapter: new Adapter() })

describe('Navbar', () => {
  it('have class of "nav-wrapper"', () => {
    const wrapper = shallow(<Navbar/>)

    expect(wrapper.find('div').hasClass('nav-wrapper')).toBe(true)
  })
})
