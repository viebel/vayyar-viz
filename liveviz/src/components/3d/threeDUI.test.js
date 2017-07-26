import React from 'react'
import ThreeDUI from './ThreeDUI'
import { mount } from 'enzyme'

const setup = () => {
  const props = {
    drawPlot: jest.fn(),
    data: {Data: []},
  }

  const wrapper = mount(<ThreeDUI {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('ThreeDUI', () => {
  let wrapper, props

  beforeEach(() => {
    const s = setup()
    wrapper = s.wrapper
    props = s.props
  })
  it('should render with no exception', () => {
    expect(wrapper).toBeTruthy()
  })
  it('should call drawPlot', () => {
    expect(props.drawPlot).toHaveBeenCalled()
  })
  it('should call drawPlot with the proper args', () => {
    expect(props.drawPlot.mock.calls.length).toBe(1)
    // when trying to match the first argument, the test engine hangs
    expect(props.drawPlot.mock.calls[0][1]).toBe(props.data.Data)
  })
})
