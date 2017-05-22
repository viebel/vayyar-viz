import { data, defaultState } from './DataReducers'

describe('data reducer', () => {
  it('should return the default state', () => {
    expect(data(undefined, {})).toEqual(defaultState)
  })
  it('should handle DATA_UPDATE_TRACKER', () => {
    expect(
      data(undefined, {type: 'DATA_UPDATE_TRACKER', val: [1,2,3]})
      .tracker
    ).toEqual([1,2,3])
  })
  describe('DATA_UPDATE_PARAM', () => {
    it('should update value of an existing param', () => {
      const variables = [
        {ActualName: 'a', Value: 1},
        {ActualName: 'b', Value: 2},
      ]
      expect(data(
        {params: {variables}},
        {type: 'DATA_UPDATE_PARAM',
        val: {name: 'a', value: 17}}).params.variables)
        .toEqual([
          {ActualName: 'a', Value: 17},
          {ActualName: 'b', Value: 2},
        ])
      })
      it('should do nothing with non-existing param', () => {
        const variables = [
          {ActualName: 'a', Value: 1},
          {ActualName: 'b', Value: 2},
        ]
        expect(data(
          {params: {variables}},
          {type: 'DATA_UPDATE_PARAM',
          val: {name: 'c', value: 17}}).params.variables)
          .toEqual([
            {ActualName: 'a', Value: 1},
            {ActualName: 'b', Value: 2},
          ])
        })
      })
    })
