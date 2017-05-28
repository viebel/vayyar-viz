import React from 'react'
import Number from './Number'
import { dissoc } from 'ramda'
import { shallow } from 'enzyme'

function setup(args) {
  const props = {
    onChange: jest.fn(),
    args
  }

  const wrapper = shallow(<Number {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('Number', () => {
  let wrapper, props

  const args = {
    Description: "A cool param",
    ActualName: "A cool name",
    Value: 18,
    Min: 10,
    Step: 0.3,
    Max: 30,
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
  it('should have a default step when Step is not provided', () => {
    const wrapper = setup(dissoc('Step', args)).wrapper
    const elem = wrapper.find('FormControl')
    expect(elem.props().step).toBe((args.Max - args.Min)/100)
  })
  it('should use the provided step when Step is provided', () => {
    const elem = wrapper.find('FormControl')
    expect(elem.props().step).toBe(args.Step)
  })
})
