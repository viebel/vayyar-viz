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
    Min: 10,
    Max: 30
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
    expect(elem.props().min).toBe(args.Min)
    expect(elem.props().max).toBe(args.Max)
    expect(elem.props().value).toBe(args.Value)
  })
  it('should call FormControl onChange with proper value', () => {
    const elem = wrapper.find('FormControl')
    elem.props().onChange({target:{value: 98}})
    expect(props.onChange.mock.calls.length).toBe(1)
    expect(props.onChange.mock.calls[0]).toEqual([98])
  })
  it('should render a ReactBootstrapSlider', () => {
    const elem = wrapper.find('ReactBootstrapSlider')
    expect(elem.props().min).toBe(args.Min)
    expect(elem.props().max).toBe(args.Max)
    expect(elem.props().value).toBe(args.Value)
    expect(elem.props().tooltip).toBe("hide")
    expect(elem.props().change).toBeDefined()
  })
  it('should call ReactBootstrapSlider onChange with proper value', () => {
    const elem = wrapper.find('ReactBootstrapSlider')
    elem.props().change({target:{value: 98}})
    expect(props.onChange.mock.calls.length).toBe(1)
    expect(props.onChange.mock.calls[0]).toEqual([98])
  })
})
