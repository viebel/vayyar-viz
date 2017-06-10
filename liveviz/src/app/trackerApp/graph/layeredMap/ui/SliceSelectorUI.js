import React from 'react'
import Dropdown from 'controls/Dropdown'


const SliceSelectorUI = ({slice, availableSlices, setSlice}) =>
<Dropdown
  onChange={setSlice}
  args={{
    Description: "",
    Value: slice,
    ListValues: availableSlices
  }}/>

  export default SliceSelectorUI
