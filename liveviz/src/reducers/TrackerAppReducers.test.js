import { trackerApp, defaultState } from './TrackerAppReducers'

describe('trackerApp reducer', () => {
  it('should return the default state', () => {
    expect(trackerApp(undefined, {})).toEqual(defaultState)
  })
  describe('TRACKER_APP_SCREEN_SET_VIEW', () => {
    it('should update the view when the view is valid', () => {
      expect(trackerApp(
        {
          view: 'singleMap'
        },
        {
          type: 'TRACKER_APP_SCREEN_SET_VIEW',
          val: 'multipleMap'
        }
      ).view).toEqual('multipleMap')
    })
    it('should throw an exception when the view is invalid', () => {
      expect(() => trackerApp(
        {
          view: 'singleMap'
        },
        {
          type: 'TRACKER_APP_SCREEN_SET_VIEW',
          val: 'xxx'
        }
      )).toThrow()
    })
  })
  describe('TRACKER_APP_SCREEN_SET_LAYERS', () => {
    const state = {
      singleMapView : {
        layers: {
          raw: true,
          tracker: false,
        },
        slice: "XY",
      },
      multipleMapView : {
        slices: ["XY", "XY", "XZ", "XZ"],
        layers: [
          {raw: true},
          {tracker:true},
          {tracker:true},
          {raw:true, tracker:true}
        ]
      }
    }
    const newLayers = {
      raw: true,
      awesome: true,
    }
    it('should update the layers of `singleMap`', () => {
      expect(trackerApp(
        state,
        {
          type: 'TRACKER_APP_SCREEN_SET_LAYERS',
          val: {
            view: 'singleMap',
            layers: newLayers
          }
        }
      ).singleMapView.layers).toEqual(newLayers)
    })
    it('should update the layers of `multipleMap`', () => {
      expect(trackerApp(
        state,
        {
          type: 'TRACKER_APP_SCREEN_SET_LAYERS',
          val: {
            view: 'multipleMap',
            mapIdx: 2,
            layers: newLayers
          }
        }
      ).multipleMapView.layers[2]).toEqual(newLayers)
    })
    it('should throw an exception when the view is invalid', () => {
      expect(() => trackerApp(
        state,
        {
          type: 'TRACKER_APP_SCREEN_SET_LAYERS',
          val: {
            view: 'singleMapInvalid',
            layers: newLayers
          }
        }
      )).toThrow()
    })
  })

  describe('TRACKER_APP_SCREEN_SET_SLICE', () => {
    const state = {
      singleMapView : {
        layers: {
          raw: true,
          tracker: false,
        },
        slice: "XY",
      },
      multipleMapView : {
        slices: ["XY", "XY", "XZ", "XZ"],
        layers: [
          {raw: true},
          {tracker:true},
          {tracker:true},
          {raw:true, tracker:true}
        ]
      }
    }
    const newSlice = "ZZZ"
    it('should update the layers of `singleMap`', () => {
      expect(trackerApp(
        state,
        {
          type: 'TRACKER_APP_SCREEN_SET_SLICE',
          val: {
            view: 'singleMap',
            slice: newSlice
          }
        }
      ).singleMapView.slice).toEqual(newSlice)
    })
    it('should update the layers of `multipleMap`', () => {
      expect(trackerApp(
        state,
        {
          type: 'TRACKER_APP_SCREEN_SET_SLICE',
          val: {
            view: 'multipleMap',
            mapIdx: 2,
            slice: newSlice
          }
        }
      ).multipleMapView.slices[2]).toEqual(newSlice)
    })
    it('should throw an exception when the view is invalid', () => {
      expect(() => trackerApp(
        state,
        {
          type: 'TRACKER_APP_SCREEN_SET_SLICE',
          val: {
            view: 'singleMapInvalid',
            slice: newSlice
          }
        }
      )).toThrow()
    })
  })

})
