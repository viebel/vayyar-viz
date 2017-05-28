import React from 'react'
import MinMaxSlider from './MinMaxSlider'
import { dissoc } from 'ramda'
import { shallow } from 'enzyme'

function setup(args) {
  const props = {
    onChange: jest.fn(),
    args
  }

  const wrapper = shallow(<MinMaxSlider {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('MinMaxSlider', () => {
  let wrapper, props

  const args = {
    Description: "A cool param",
    ActualName: "A cool name",
    Value: [18, 99],
    Step: 0.34,
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
  describe('First Value', () => {
    let elem
    beforeEach(() => {
      elem = wrapper.find('FormControl').at(0)
    })
    it('should render a FormControl of type number with the proper value', () => {
      expect(elem.props().type).toBe('number')
      expect(elem.props().min).toBe(args.Min)
      expect(elem.props().max).toBe(args.Max)
      expect(elem.props().step).toBe(args.Step)
      expect(elem.props().value).toBe(args.Value[0])
    })
    it('should have a default step when Step is not provided', () => {
      const wrapper = setup(dissoc('Step', args)).wrapper
      const elem = wrapper.find('FormControl').at(0)
      expect(elem.props().step).toBe((args.Max - args.Min)/100)
    })
    it('should call the FormControl onChange with proper value', () => {
      elem.props().onChange({target:{value: 50}})
      expect(props.onChange.mock.calls.length).toBe(1)
      expect(props.onChange.mock.calls[0]).toEqual([[50, 99]])
    })
  })
  describe('Second Value', () => {
    let elem
    beforeEach(() => {
      elem = wrapper.find('FormControl').at(1)
    })
    it('should render a FormControl of type number with the proper value', () => {
      expect(elem.props().type).toBe('number')
      expect(elem.props().min).toBe(args.Min)
      expect(elem.props().max).toBe(args.Max)
      expect(elem.props().step).toBe(args.Step)
      expect(elem.props().value).toBe(args.Value[1])
    })
    it('should have a default step when Step is not provided', () => {
      const wrapper = setup(dissoc('Step', args)).wrapper
      const elem = wrapper.find('FormControl').at(1)
      expect(elem.props().step).toBe((args.Max - args.Min)/100)
    })
    it('should call the FormControl onChange with proper value', () => {
      elem.props().onChange({target:{value: 50}})
      expect(props.onChange.mock.calls.length).toBe(1)
      expect(props.onChange.mock.calls[0]).toEqual([[18,50]])
    })
  })
  describe('ReactBootstrapSlider', () => {
    let elem
    beforeEach(() => {
      elem = wrapper.find('ReactBootstrapSlider')
    })
    it('should render a ReactBootstrapSlider', () => {
      expect(elem.props().min).toBe(args.Min)
      expect(elem.props().max).toBe(args.Max)
      expect(elem.props().value).toBe(args.Value)
      expect(elem.props().tooltip).toBe("hide")
      expect(elem.props().step).toBe(args.Step)
      expect(elem.props().change).toBeDefined()
    })
    it('should call ReactBootstrapSlider onChange with proper value', () => {
      elem.props().change({target:{value: 98}})
      expect(props.onChange.mock.calls.length).toBe(1)
      expect(props.onChange.mock.calls[0]).toEqual([98])
    })
    it('should have a default step when Step is not provided', () => {
      const wrapper = setup(dissoc('Step', args)).wrapper
      const elem = wrapper.find('ReactBootstrapSlider')
      expect(elem.props().step).toBe((args.Max - args.Min)/100)
    })
  })
})
