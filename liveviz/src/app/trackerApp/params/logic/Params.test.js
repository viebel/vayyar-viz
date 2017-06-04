import React from 'react'
import Params from './Params'
import ParamsFetchUI from '../ui/ParamsFechUI'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

export const storeFake = (state) => ({
	default() {},
	subscribe() {},
	dispatch () {},
	getState () {
		return { ...state }
	},
})

describe('Params', () => {
	let LogicComponent,
	UIComponent

	beforeEach(() => {
		const state = {
			data: {
				params: {
					variables: []
				}
			},
			screens: {
				params: {}
			},
			global: {
				serverRoot: 'http://209.9.36.2:1234',
				connectionStatus: 'disconnected',
				graphKey: 0,
			}
		}
		const store = storeFake(state)
		const wrapper = mount(
			<Provider store={ store }>
				<Params
					url="http://aa.com"
					running={false}
					status="connected"/>
			</Provider>
		)
		LogicComponent = wrapper.find(Params)
		UIComponent = LogicComponent.find(ParamsFetchUI)
	})
	it ('should render', () => {
		expect(LogicComponent.length).toBeTruthy()
		expect(UIComponent.length).toBeTruthy()
	})
	it ('should call all the actions without errors', () => {
		UIComponent.props().sendParams()
		UIComponent.props().resetParams()
		UIComponent.props().onSuccess()
		UIComponent.props().onError()
		UIComponent.props().updateParam()
	})
})
