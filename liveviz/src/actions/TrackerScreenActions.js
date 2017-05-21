export const trackerScreenToggleRunning = () => ({
  type: 'TRACKER_SCREEN_TOGGLE_RUNNING'
})

export const trackerScreenSetError = (reason, url) => ({
  type: 'TRACKER_SCREEN_SET_ERROR',
  val: {reason, url},
})
