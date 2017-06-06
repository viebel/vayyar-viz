import { sendParams, paramsScreenTogglePreventFetch } from 'actions/ParamsScreenActions'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import configureMockStore from 'redux-mock-store'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('params screen async actions ', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  describe('when sending params', () => {
    const serverRoot = 'http://server.com'
    const params = {variables: []}

    it('sets prevent fetch to true and then to false on success', () => {
      fetchMock.post(`${serverRoot}/post`, "ok")
      const store = mockStore({
        global: {
          serverRoot,
        },
        data: {params}
      })
      const expectedActions = [
        paramsScreenTogglePreventFetch(true),
        paramsScreenTogglePreventFetch(false)
      ]
      return store.dispatch(sendParams())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
    it('sets prevent fetch to true and then to false on failure', () => {
      fetchMock.post(`${serverRoot}/post`, {throws: "issue"})
      const store = mockStore({
        global: {
          serverRoot,
        },
        data: {params}
      })
      const expectedActions = [
        paramsScreenTogglePreventFetch(true),
        paramsScreenTogglePreventFetch(false)
      ]
      return store.dispatch(sendParams())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})
