import React from 'react'
import CheckboxChoices from './Checkbox'
import { shallow } from 'enzyme'

function setup(args) {
  const props = {
    onChange: jest.fn(),
    args
  }

  const wrapper = shallow(<CheckboxChoices {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('CheckboxChoices', () => {
  let wrapper, props

  const args = {
    Description: "Names",
    ActualName: "A cool name",
    Value: ["Jim", "Paul"],
    ListValues: ["Paul", "Jim", "Ed", "Dave"],
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
  it('should render 4 Checkbox', () => {
    expect(wrapper.find('Checkbox')).toHaveLength(4)
  })
  it('should create Checkbox with proper text', () => {
    expect(wrapper.find('Checkbox').at(0).children().text()).toBe("Paul")
    expect(wrapper.find('Checkbox').at(1).children().text()).toBe("Jim")
    expect(wrapper.find('Checkbox').at(2).children().text()).toBe("Ed")
    expect(wrapper.find('Checkbox').at(3).children().text()).toBe("Dave")
  })
  it('should select only Jim and Paul', () => {
    expect(wrapper.find('Checkbox').at(0).props().checked).toBeTruthy()
    expect(wrapper.find('Checkbox').at(1).props().checked).toBeTruthy()
    expect(wrapper.find('Checkbox').at(2).props().checked).toBeFalsy()
    expect(wrapper.find('Checkbox').at(3).props().checked).toBeFalsy()
  })
  it('should call onChange with the checked value', () => {
    let ed = wrapper.find('Checkbox').at(2)
    ed.props().onChange({target: {checked: true}})
    expect(props.onChange.mock.calls.length).toBe(1)
    expect(props.onChange.mock.calls[0]).toEqual([["Jim", "Paul", "Ed"]])
  })
  it('should call onChange without the unchecked value', () => {
    let jim = wrapper.find('Checkbox').at(1)
    jim.props().onChange({target: {checked: false}})
    expect(props.onChange.mock.calls.length).toBe(1)
    expect(props.onChange.mock.calls[0]).toEqual([["Paul"]])
  })
  it('should call onChange with the checked value when already checked', () => {
    let jim = wrapper.find('Checkbox').at(1)
    jim.props().onChange({target: {checked: true}})
    expect(props.onChange.mock.calls.length).toBe(1)
    expect(props.onChange.mock.calls[0]).toEqual([["Jim", "Paul"]])
  })
})
