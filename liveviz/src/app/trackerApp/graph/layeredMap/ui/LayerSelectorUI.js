import React from 'react'
import {compose, reduce, filter, identity} from 'ramda'
import CheckboxChoices from 'controls/Checkbox'


const arrToObj = arr =>
reduce((acc,value) => {
  acc[value] = true
  return acc
},
{},
arr)

const objToArr = compose(Object.keys, filter(identity))

const LayerSelectorUI = ({layers, availableLayers, setLayers}) =>
<CheckboxChoices
  onChange={compose(setLayers, arrToObj)}
  args={{
    Description: "",
    Value: objToArr(layers),
    ListValues: availableLayers
  }}/>

  export default LayerSelectorUI
