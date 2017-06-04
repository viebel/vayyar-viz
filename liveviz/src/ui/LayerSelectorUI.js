import React from 'react'
import {partial} from 'ramda'
import CheckboxChoices from '../controls/Checkbox'

const LayerSelectorUI = ({view, mapIdx, layers, toggleLayer}) =>
<CheckboxChoices
  onChange={partial(toggleLayer, [view, mapIdx])}
  args={{Description: "Layer selector",
    Value:["raw", "tracker"],
    ListValues:["raw", "tracker", "posture", "dead zones"]}}
    />

  export default LayerSelectorUI
