export const trackerScreenToggleRunning = () => ({
  type: 'TRACKER_SCREEN_TOGGLE_RUNNING'
})

export const trackerScreenSetError = (reason, url) => ({
  type: 'TRACKER_SCREEN_SET_ERROR',
  val: {reason, url},
})

export const trackerAppScreenSetView = (viewMode) => ({
  type: 'TRACKER_APP_SCREEN_SET_VIEW',
  val: viewMode,
})

export const setTrackerAppLayers = (view, mapIdx, layers) => ({
  type: 'TRACKER_APP_SCREEN_SET_LAYERS',
  val: {
    view,
    mapIdx,
    layers,
  }
})
