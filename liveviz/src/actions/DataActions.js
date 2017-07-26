export const updateTrackerInitData = (data) =>  ({
  type: 'DATA_UPDATE_TRACKER_INIT',
  val: data,
})

export const updateTrackerData = (data) =>  ({
  type: 'DATA_UPDATE_TRACKER',
  val: data,
})

export const updateHeatMapData = (data) => ({
  type: 'DATA_UPDATE_HEATMAP',
  val: data,
})

export const updateThreeDData = (data) => ({
  type: 'DATA_UPDATE_THREED',
  val: data,
})


export const updateParamsData = (data) => ({
  type: 'DATA_UPDATE_PARAMS',
  val: data,
})

export const resetDataState = () => ({
  type: 'DATA_RESET_DATA_STATE',
})
