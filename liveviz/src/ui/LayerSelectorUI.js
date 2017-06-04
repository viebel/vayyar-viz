import React from 'react'
import {compose, reduce, filter} from 'ramda'
import CheckboxChoices from '../controls/Checkbox'


const arrToObj = arr =>
reduce((acc,value) => {
  acc[value] = true
  return acc
},
{},
arr)

const LayerSelectorUI = ({layers, availableLayers, setLayers}) =>
<CheckboxChoices
  onChange={compose(setLayers, arrToObj)}
  args={{
    Description: "",
    Value:Object.keys(layers),
    ListValues:availableLayers
  }}/>

  export default LayerSelectorUI
