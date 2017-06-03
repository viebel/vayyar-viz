import React from 'react'

import MultipleMapsUI from '../ui/MultipleMapsUI'
import SingleMapUI from '../ui/SingleMapUI'


const GraphSectionUI = ({ multipleMapView, singleMapView, view, url, running, status, updateStatus}) =>
<div>
  {
    view === 'singleMap' ?
    <SingleMapUI
      slice={singleMapView.slice}
      layers={singleMapView.layers}
      url={url}
      running={running}
      updateStatus={updateStatus}
      status={status}
      />
    :
    <MultipleMapsUI
      sliceArray={multipleMapView.slices}
      layersArray={multipleMapView.layers}
      url={url}
      running={running}
      updateStatus={updateStatus}
      status={status}
      />
  }
</div>


export default GraphSectionUI
