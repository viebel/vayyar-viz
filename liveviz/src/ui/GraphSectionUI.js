import React from 'react'
import { Col, Row } from 'react-bootstrap'

import MultipleMapsUI from '../ui/MultipleMapsUI'
import SingleMapUI from '../ui/SingleMapUI'


const GraphSectionUI = ({ url, running, status, updateStatus}) =>
<div>
  {
    url ?
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
