export const setServerRoot = (url) => {
  console.log("url: " + url)
  return {
    type: 'SET_SERVER_ROOT',
    val: url,
  }
}

export const setConnectionStatus = (status) => {
  return {
    type: 'SET_CONNECTION_STATUS',
    val: status,
  }
}

export const trackerScreenToggleRunning = () => {
  return {
    type: 'TRACKER_SCREEN_TOGGLE_RUNNING'
  }
}

export const trackerScreenUpdateData = (data) => {
  return {
    type: 'TRACKER_UPDATE_DATA',
    val: data,
  }
}

export const updateHeatMapData = (data) => {
  return {
    type: 'HEATMAP_UPDATE_DATA',
    val: data,
  }
}

export const trackerScreenSetError = (reason, url) => {
  return {
    type: 'TRACKER_SCREEN_SET_ERROR',
    val: {reason, url},
  }
}
