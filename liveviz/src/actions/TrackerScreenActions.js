export const trackerScreenToggleRunning = () => {
  return {
    type: 'TRACKER_SCREEN_TOGGLE_RUNNING'
  }
}

export const trackerScreenSetError = (reason, url) => {
  return {
    type: 'TRACKER_SCREEN_SET_ERROR',
    val: {reason, url},
  }
}
