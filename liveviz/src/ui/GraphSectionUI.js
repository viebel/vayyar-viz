import React from 'react'

import MultipleMapsUI from '../ui/MultipleMapsUI'
import SingleMapUI from '../ui/SingleMapUI'


const GraphSectionUI = ({ view, url, running, status, updateStatus}) =>
<div>
  {
    view === 'singleMap' ?
    <SingleMapUI
      slice={"XY"}
      layers={{raw:true, tracker:true}}
      url={url}
      running={running}
      updateStatus={updateStatus}
      status={status}
      />
    :
    <MultipleMapsUI
      sliceArray={["XY", "XY", "XZ", "XZ"]}
      layersArray={[{raw: true}, {tracker:true}, {tracker:true}, {raw:true, tracker:true}]}
      url={url}
      running={running}
      updateStatus={updateStatus}
      status={status}
      />
  }
</div>


export default GraphSectionUI
