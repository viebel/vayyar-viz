import React from 'react'
import CheckboxChoices from '../controls/Checkbox'

const LayerSelectorUI = ({layers, availableLayers, setLayers}) =>
<CheckboxChoices
  onChange={setLayers}
  args={{
    Description: "",
    Value:Object.keys(layers),
    ListValues:availableLayers
  }}/>

  export default LayerSelectorUI
