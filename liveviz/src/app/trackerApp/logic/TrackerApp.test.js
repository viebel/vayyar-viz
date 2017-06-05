import React from 'react'
import GraphAndParamsUI from '../ui/TrackerAppUI'
import { shallow } from 'enzyme'
import { assoc } from 'ramda'

function setup({ status, running, displayParams }) {
  const props = {
    onChange: jest.fn(),
    updateStatus: jest.fn(),
    toggleRunning: jest.fn(),
    toggleParams: jest.fn(),
    url: "http://aa.com",
    status,
    running,
    displayParams,
  }

  const wrapper = shallow(<GraphAndParamsUI {...props}/>)
  return {
    props,
    wrapper
  }
}

describe('GraphAndParamsUI', () => {
  let wrapper
  const someProps = {
    status: "connected",
    running: true,
    displayParams: true,
  }
  beforeEach(() => {
    const s = setup(someProps)
    wrapper = s.wrapper
  })
  it('should render a Grid', () => {
    const Grid = wrapper.find('Grid').first()
    expect(Grid.props().fluid).toBe(true)
    expect(Grid.props().className).toBe("paramsDisplayed")
  })
  it('should show params when displayParams is true', () => {
    const Grid = wrapper.find('Grid').first()
    expect(Grid.props().className).toBe("paramsDisplayed")
    expect(wrapper.find('TitleBarUI')).toHaveLength(1)
    expect(wrapper.find('Connect(ParamsFetchUI)')).toHaveLength(1)
  })
  it('should hide params when displayParams is false', () => {
    const myProps = assoc('displayParams', false, someProps)
    const wrapper = setup(myProps).wrapper
    const Grid = wrapper.find('Grid').first()
    expect(Grid.props().className).toBe("paramsHidden")
    expect(wrapper.find('TitleBarUI')).toHaveLength(1)
    expect(wrapper.find('Connect(ParamsFetchUI)')).toHaveLength(0)
  })
})
