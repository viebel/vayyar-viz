export const updateTrackerData = (data) =>  {
  return {
    type: 'DATA_UPDATE_TRACKER',
    val: data,
  }
}

export const updateHeatMapData = (data) => {
  return {
    type: 'DATA_UPDATE_HEATMAP',
    val: data,
  }
}


export const updateParamsData = (data) => {
  return {
    type: 'DATA_UPDATE_PARAMS',
    val: data,
  }
}
