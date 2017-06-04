import React from 'react'
import Boolean from './Boolean'
import { shallow } from 'enzyme'

function setup(args) {
  const props = {
    onChange: jest.fn(),
    args
  }

  const wrapper = shallow(<Boolean {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('Boolean', () => {
  let wrapper, props
  const args = {
    Description: "A cool param",
    ActualName: "A cool name",
    Value: true,
  }
  beforeEach(() => {
    const s = setup(args)
    wrapper = s.wrapper
    props = s.props
  })
  it('should render with proper title', () => {
    expect(wrapper.find('ControlLabel').childAt(0).text())
    .toBe(`${args.Description} `)
  })
  it('should render the 1st option as true', () => {
    const elem = wrapper.find('Radio').first()
    expect(elem.props().name).toBe(args.ActualName)
    expect(elem.props().checked).toBe(true)
    expect(elem.children().at(0).text())
    .toBe("true")
  })
  it('should render the 2nd option as false', () => {
    const elem = wrapper.find('Radio').at(1)
    expect(elem.props().name).toBe(args.ActualName)
    expect(elem.props().checked).toBe(false)
    expect(elem.children().at(0).text()).toBe("false")
  })
  it('should check first option when value is `true`', () => {
    const { wrapper } = setup({Value: true})
    const elem = wrapper.find('Radio').first()
    expect(elem.props().checked).toBe(true)
  })
  it('should check first option when value is `1`', () => {
    const { wrapper } = setup({Value: true})
    const elem = wrapper.find('Radio').first()
    expect(elem.props().checked).toBe(true)
  })
  it('should call onChange with `true` when clicking on first option', () => {
    const elem = wrapper.find('Radio').first()
    elem.props().onChange()
    expect(props.onChange.mock.calls.length).toBe(1)
    expect(props.onChange.mock.calls[0]).toEqual([true])
  })
  it('should call onChange with `false` when clicking on second option', () => {
    const elem = wrapper.find('Radio').at(1)
    elem.props().onChange()
    expect(props.onChange.mock.calls.length).toBe(1)
    expect(props.onChange.mock.calls[0]).toEqual([false])
  })
})
