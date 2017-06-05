import React from 'react'
import LayerSelectorUI from './LayerSelectorUI'
import { shallow } from 'enzyme'


expect.extend({
  toEqualAsSets(received, argument) {
    const pass = this.equals(new Set(received), new Set(argument))
    if (pass) {
      return {
        message: () => (
          `expected ${received} not to define the same set as ${argument}`
        ),
        pass: true,
      }
    } else {
      return {
        message: () => (
          `expected ${received} to define the same set as ${argument}`
        ),
        pass: false,
      }
    }
  }
})

function setup({layers, availableLayers}) {
  const props = {
    setLayers: jest.fn(),
    layers,
    availableLayers
  }

  const wrapper = shallow(<LayerSelectorUI {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('LayerSelectorUI', () => {
  let wrapper, props
  const args = {
    layers: {a:true, b: false, c: true},
    availableLayers: ['a', 'b', 'c', 'd', 'e'],
  }
  beforeEach(() => {
    const s = setup(args)
    wrapper = s.wrapper
    props = s.props
  })
  it('should render with proper props', () => {
    const props = wrapper.find('CheckboxChoices').props()
    expect(props.args.Value.length).toEqual(2)
    expect(props.args.Value).toEqual(expect.arrayContaining(['c', 'a']))
    expect(props.args.Description).toEqual("")
    expect(props.args.ListValues).toEqual(args.availableLayers)
  })
  it('should call `setLayers` with the proper layers', () => {
    const checkBoxChoices = wrapper.find('CheckboxChoices')
    checkBoxChoices.props().onChange(['a', 'e'])
    expect(props.setLayers.mock.calls.length).toBe(1)
    expect(props.setLayers.mock.calls[0]).toEqual([{a: true, e: true}])
  })
})
