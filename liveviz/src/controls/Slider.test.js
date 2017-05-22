import React from 'react'
import Slider from './Slider'
import { shallow } from 'enzyme'

function setup(args) {
  const props = {
    onChange: jest.fn(),
    args
  }

  const wrapper = shallow(<Slider {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('Slider', () => {
  let wrapper, props

  const args = {
    Description: "A cool param",
    ActualName: "A cool name",
    Value: 18,
  }
  beforeEach(() => {
    const s = setup(args)
    wrapper = s.wrapper
    props = s.props
  })
  it('should render with proper title', () => {
    expect(wrapper.find('Col').first().children().first().text())
    .toBe(args.Description)
  })
  it('should render a FormControl of type number', () => {
    const elem = wrapper.find('FormControl').first()
    expect(elem.props().type).toBe('number')
    expect(elem.props().value).toBe(args.Value)
  })
  it('should call onChange with `false` when clicking on second option', () => {
    const elem = wrapper.find('FormControl').first()
    elem.props().onChange({target:{value: 98}})
    expect(props.onChange.mock.calls.length).toBe(1)
    expect(props.onChange.mock.calls[0]).toEqual([98])
  })
})
