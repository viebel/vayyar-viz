import LayeredMapUI from '../ui/LayeredMapUI'
import {getTrackerAppLayers, getTrackerAppSlice} from 'reducers'
import {setTrackerAppLayers, setTrackerAppSlice} from 'actions/TrackerScreenActions'
import { connect } from 'react-redux'

const mapStateToProps = (state, {view, mapIdx}) => ({
    layers: getTrackerAppLayers(state, view, mapIdx),
    slice: getTrackerAppSlice(state, view, mapIdx),
    availableLayers: ["raw", "tracker", "posture", "dead zones"],
    availableSlices: ["XY", "XZ"]
})

const mapDispatchToProps = (dispatch, {view, mapIdx}) => ({
  setLayers(layers) {
    dispatch(setTrackerAppLayers(view, mapIdx, layers))
  },
  setSlice(layers) {
    dispatch(setTrackerAppSlice(view, mapIdx, layers))
  },
})

const LayeredMap = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayeredMapUI)

export default LayeredMap