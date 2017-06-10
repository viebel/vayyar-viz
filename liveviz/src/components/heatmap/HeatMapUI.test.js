import React from 'react'
import HeatMapUI from './HeatMapUI'
import { mount } from 'enzyme'

const setup = () => {
  const props = {
    drawHeatMap: jest.fn(),
    data: {Data: []},
  }

  const wrapper = mount(<HeatMapUI {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('HeatMapUI', () => {
  let wrapper, props

  beforeEach(() => {
    const s = setup()
    wrapper = s.wrapper
    props = s.props
  })
  it('should render with no exception', () => {
    expect(wrapper).toBeTruthy()
  })
  it('should call drawHeaMap', () => {
    expect(props.drawHeatMap).toHaveBeenCalled()
  })
  it('should call drawHeaMap with the proper args', () => {
    expect(props.drawHeatMap.mock.calls.length).toBe(1)
    // when trying to match the first argument, the test engine hangs
    expect(props.drawHeatMap.mock.calls[0][1]).toBe(props.data.Data)
    expect(props.drawHeatMap.mock.calls[0][2]).toEqual({min: 0, max: 4000})
  })
})
