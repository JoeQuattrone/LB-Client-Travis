import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Navbar from './Navbar'

Enzyme.configure({ adapter: new Adapter() })

describe('Navbar', () => {
  it('has text of `LyricBunny`', () => {
    const wrapper = shallow(<Navbar/>)
    expect(wrapper.find('.brand-logo').text()).toBe('LyricBunny')
  })
})
