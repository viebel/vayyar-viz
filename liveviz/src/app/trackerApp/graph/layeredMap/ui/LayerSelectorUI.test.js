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
  it('should render 5 buttons - two of them with the selected class', () => {
    expect(wrapper.find('Button')).toHaveLength(5)
    expect(wrapper.find('.selected')).toHaveLength(2)
    })
  it('should call update layers on click', () => {
    const firstButton = wrapper.find('Button').first()
    firstButton.props().onClick()
    expect(props.setLayers.mock.calls.length).toBe(1)
    expect(props.setLayers.mock.calls[0]).toEqual([{a: false, b: false, c: true}])
  })
  it('should call `setLayers` with the proper layers', () => {
    const firstButton = wrapper.find('Button').at(1)
    firstButton.props().onClick()
    expect(props.setLayers.mock.calls.length).toBe(1)
    expect(props.setLayers.mock.calls[0]).toEqual([{a: true, b: true, c: true}])
  })
})
