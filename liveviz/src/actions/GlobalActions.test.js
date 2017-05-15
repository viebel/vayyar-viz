import { setServerRoot, setConnectionStatus } from './GlobalActions'

describe('global actions', () => {
  it('should create an action to set serverRoot', () => {
    const url = "http://cnn.com"
    const expectedAction = {
      type: 'SET_SERVER_ROOT',
      val: url,
    }
    expect(setServerRoot(url)).toEqual(expectedAction)
  })
  it('should create an action to set the connection status', () => {
    const status = "connected"
    const expectedAction = {
      type: 'SET_CONNECTION_STATUS',
      val: status,
    }
    expect(setConnectionStatus(status)).toEqual(expectedAction)
  })
})
