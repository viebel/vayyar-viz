import React from 'react'
import RulerUI from './RulerUI'
import { shallow } from 'enzyme'

function setup(props) {
  const wrapper = shallow(<RulerUI {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('RulerUI', () => {
  let wrapper, props

  const args = {
    maxVerticalValue: 10,
    maxHorizontalValue: 20,
  }
  beforeEach(() => {
    const s = setup(args)
    wrapper = s.wrapper
    props = s.props
  })
  it('should render', () => {
    expect(wrapper.filter('div'))
    .toHaveLength(1)
  })
  it('should render the origin', () => {
    expect(wrapper.find('.rulerUI_origin').text())
    .toBe('0')
  })
  describe('vertical axis', () =>  {
    it('should have 10 ticks', () => {
      expect(wrapper.find('.rulerUI_vertical').children())
      .toHaveLength(10)
    })
    it('should have ticks with numbers and symbol', () => {
      const children = wrapper.find('.rulerUI_vertical').children()

      expect(children.at(0).text())
      .toBe('10')
      expect(children.at(1).text())
      .toBe('__')
      expect(children.at(2).text())
      .toBe('__')
      expect(children.at(3).text())
      .toBe('__')
      expect(children.at(4).text())
      .toBe('__')
      expect(children.at(5).text())
      .toBe('5')
      expect(children.at(6).text())
      .toBe('__')
      expect(children.at(7).text())
      .toBe('__')
      expect(children.at(8).text())
      .toBe('__')
      expect(children.at(9).text())
      .toBe('__')
    })
  })
  describe('horizontal axis', () =>  {
    it('should have 10 ticks', () => {
      expect(wrapper.find('.rulerUI_horizontal').children())
      .toHaveLength(20)
    })
    it('should have ticks with numbers and symbol', () => {
      const children = wrapper.find('.rulerUI_horizontal').children()
      expect(children.at(0).text())
      .toBe('|')
      expect(children.at(1).text())
      .toBe('|')
      expect(children.at(2).text())
      .toBe('|')
      expect(children.at(3).text())
      .toBe('|')
      expect(children.at(4).text())
      .toBe('5')
    })
  })
})
