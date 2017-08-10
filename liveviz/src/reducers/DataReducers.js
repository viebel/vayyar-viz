import { assocPath, assoc, findIndex, adjust, propEq, groupBy, head, split } from 'ramda'


const heatmapData = {"DataType":"demoData2","Data":[[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],[0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]],"X0":0.0,"X1":50.0,"Y0":0.0,"Y1":50.0,"ID":"Generic2DMatrix","__jTypeID":"MatGUIInterfaces.Generic2DMatrix, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"}

const trackerInitData = {
  "DataType":"Tracker_Init",
  "Data":[[3.0,3.0], [-1, -1]],
  "X0":0.0,
  "X1":0.0,
  "Y0":0.0,
  "Y1":0.0,
  "ID":"Generic2DMatrix",
  "__jTypeID":"MatGUIInterfaces.Generic2DMatrix, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
}

const trackerData = {
  DataType: "Tracker_Update",
  ZoneID: "Office",
  PostureVector: [
    "NA",
    "NA",
    "NA",
    "NA"
  ],
  ActivityVector: [
    "NA",
    "NA",
    "NA",
    "NA"
  ],
  LocationMatrix: [
    [
      "NaN",
      "NaN"
    ],
    [
      "NaN",
      "NaN"
    ],
    [
      "NaN",
      "NaN"
    ],
    [
      "NaN",
      "NaN"
    ]
  ],
  ID: "Tracker_Update",
  __jTypeID: "MatGUIInterfaces.Tracker_Update, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
}

export const paramsInit = { // Params to be requested, setting values "NA" tells server to return current value
  "variables":[
    {
      "VisibleName":"Processing.Board_Type",
      "ActualName":"MPR.BoardType",
      "VariableType":"Dropdown",
      "Value":"NA",
      "Description":"Choose a Board Type",
      "DefaultValue":"vCube",
      "ListValues":["vCube", "Vex"],
    },
    {
      "VisibleName":"Mode.Read_From_File",
      "ActualName":"MPR.read_from_file",
      "VariableType":"Switch",
      "Value":"NA",
      "Description":"Load Recording",
      "DefaultValue":true,
    },

    {
      "VisibleName":"Arena.X",
      "ActualName":"Cfg.Radar.LimitImageToXYZ(1:2)",
      "VariableType":"MinMaxSlider",
      "Value":"NA",
      "Description":"Arena X",
      "Min":-5.0,
      "Max":5.0,
      "DefaultValue":[-1.5, 1.5],
      "Step":0.5,
    },
    {
      "VisibleName":"Arena.Y",
      "ActualName":"Cfg.Radar.LimitImageToXYZ(3:4)",
      "VariableType":"MinMaxSlider",
      "Value":"NA",
      "Description":"Arena Y",
      "Min":-5.0,
      "Max":5.0,
      "DefaultValue":[-1.5, 1.5],
      "Step":0.5,
    },
    {
      "VisibleName":"Arena.Z",
      "ActualName":"Cfg.Radar.LimitImageToXYZ(5:6)",
      "VariableType":"MinMaxSlider",
      "Value":"NA",
      "Description":"Arena Z",
      "Min":-5.0,
      "Max":5.0,
      "DefaultValue":[-1.5, 1.5],
      "Step":0.5,
    },
    {
      "VisibleName":"Recording.Save_Image_To_File",
      "ActualName":"MPR.save_image_to_file",
      "VariableType":"Switch",
      "Description":"Save Image To File",
      "Value":"NA",
      "DefaultValue":true,
    },
    {
      "VisibleName":"Recording.Save_To_File",
      "ActualName":"MPR.save_to_file",
      "VariableType":"Switch",
      "Description":"Save Raw Data To File",
      "Value":"NA",
      "DefaultValue":true,
    },
    {
      "VisibleName":"Recording.Save_Calibed_Data",
      "ActualName":"MPR.saveData_calib",
      "VariableType":"Switch",
      "Description":"Save Calibrated Data",
      "Value":"NA",
      "DefaultValue":true,
    },
  ],
  "ID":"UpdateConfigurationEditor",
  "__jTypeID":"MatGUIInterfaces.UpdateConfigurationEditorDataBlock, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
}

const vCubeOutputsData = {
  "variables":[
    {
    "ActualName":"Cfg.ExternalGUI.OutputTypes{end + 1}",
    "Value":"Tracker_Update"
    },
    {
    "ActualName":"Cfg.ExternalGUI.OutputTypes{end + 1}",
    "Value":"sliceBot"
    },
    {
    "ActualName":"Cfg.ExternalGUI.OutputTypes{end + 1}",
    "Value":"surfaceImage"
    },
  ],
  "ID":"UpdateConfigurationEditor",
  "__jTypeID":"MatGUIInterfaces.UpdateConfigurationEditorDataBlock, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
}

const vexOutputsData = {
  "variables":[
    {
    "ActualName":"Cfg.ExternalGUI.OutputTypes{end + 1}",
    "Value":"Tracker_Update"
    },
    {
    "ActualName":"Cfg.ExternalGUI.OutputTypes{end + 1}",
    "Value":"rawImage"
    },
  ],
  "ID":"UpdateConfigurationEditor",
  "__jTypeID":"MatGUIInterfaces.UpdateConfigurationEditorDataBlock, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
}

const paramsData = { // (Yonah) Initial params to be shown by GUI until server send correct params
  "variables":[
    {
      "VisibleName":"Processing.Board_Type",
      "ActualName":"MPR.BoardType",
      "VariableType":"Dropdown",
      "Value":"vCube",
      "Description":"Choose a Board Type",
      "DefaultValue":"vCube",
      "ListValues":["vCube", "Vex"],
    },
    {
      "VisibleName":"Mode.Read_From_File",
      "ActualName":"MPR.read_from_file",
      "VariableType":"Switch",
      "Description":"Load Recording",
      "Value":true,
      "DefaultValue":true,
    },
    {
      "VisibleName":"Arena.X",
      "ActualName":"Cfg.Radar.LimitImageToXYZ(1:2)",
      "VariableType":"MinMaxSlider",
      "Value":[-1.0, 1.5],
      "Description":"Arena X",
      "Min":-5.0,
      "Max":5.0,
      "DefaultValue":[-1.0, 1.0],
      "Step":0.5,
    },
    {
      "VisibleName":"Arena.Y",
      "ActualName":"Cfg.Radar.LimitImageToXYZ(3:4)",
      "VariableType":"MinMaxSlider",
      "Value":[-1.0, 1.0],
      "Description":"Arena Y",
      "Min":-5.0,
      "Max":5.0,
      "DefaultValue":[-1.0, 1.0],
      "Step":0.5,
    },
    {
      "VisibleName":"Arena.Z",
      "ActualName":"Cfg.Radar.LimitImageToXYZ(5:6)",
      "VariableType":"MinMaxSlider",
      "Value":[-1.0, 1.0],
      "Description":"Arena Z",
      "Min":-5.0,
      "Max":5.0,
      "DefaultValue":[-1.0, 1.0],
      "Step":0.5,
    },
    {
      "VisibleName":"Recording.Save_Image_To_File",
      "ActualName":"MPR.save_image_to_file",
      "VariableType":"Switch",
      "Description":"Save Image To File",
      "Value": false,
      "DefaultValue":true,
    },
    {
      "VisibleName":"Recording.Save_To_File",
      "ActualName":"MPR.save_to_file",
      "VariableType":"Switch",
      "Description":"Save Raw Data To File",
      "Value":false,
      "DefaultValue":true,
    },
    {
      "VisibleName":"Recording.Save_Calibed_Data",
      "ActualName":"MPR.saveData_calib",
      "VariableType":"Switch",
      "Description":"Save Calibrated Data",
      "Value": false,
      "DefaultValue":true,
    },
  ],
  "ID":"UpdateConfigurationEditor",
  "__jTypeID":"MatGUIInterfaces.UpdateConfigurationEditorDataBlock, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
}

const resetData = state => {
  state = assoc('trackerInit', trackerInitData, state)
  state = assoc('tracker', trackerData, state)
  state = assoc('heatmap', heatmapData, state)
  state = assoc('threeD', heatmapData, state)
  return state;
}

export const defaultState = {
  totalPersonnel: null,
  trackerInit: trackerInitData,
  tracker: trackerData,
  heatmap: heatmapData,
  threeD: heatmapData,
  params: paramsData,
  paramsInit: paramsInit,
  vCubeOutputs : vCubeOutputsData,
  vexOutputs : vexOutputsData,
}

const updateParam = (params, name, value) => {
  const idx = findIndex(propEq('ActualName', name), params)
  if(idx === -1) {
    return params
  }
  return adjust(assoc('Value',value), idx)(params)
}

export const paramsByCategory = state => {
  const variables = state.params.variables
  return groupBy(p => head(split('.', p.VisibleName)))(variables)
}

export const data = (state=defaultState, action) => {
  switch(action.type) {
    case 'DATA_UPDATE_TOTAL_PERSONNEL':
    return assoc('totalPersonnel', action.val, state)
    case 'DATA_UPDATE_TRACKER_INIT':
    return assoc('trackerInit', action.val, state)
    case 'DATA_UPDATE_TRACKER':
    return assoc('tracker', action.val, state)
    case 'DATA_UPDATE_HEATMAP':
    return assoc('heatmap', action.val, state)
    case 'DATA_UPDATE_THREED':
    return assoc('threeD', action.val, state)
    case 'DATA_UPDATE_PARAMS':
    return assoc('params', action.val, state)
    case 'DATA_UPDATE_PARAM':
    return assocPath(['params', 'variables'], updateParam(state.params.variables, action.val.name, action.val.value), state)
    case 'DATA_RESET_DATA_STATE':
    return resetData(state)
    default:
    return state
  }
}
