import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LayeredMapUI from '../ui/LayeredMapUI'


const MultipleMapsUI = ({ sliceArray, layersArray, url, running, status, updateStatus}) =>
<div className="graphSection">
{
  [[0,1],[2,3]].map(indexArr =>
    <Row
      key={indexArr.toString()}
      className="graphRow">
    {
      indexArr.map((i) =>
      <Col
      key={i}
      xs={6}
      className="fullHeight">
      <LayeredMapUI
      slice={sliceArray[i]}
      layers={layersArray[i]}
      url={url}
      running={running}
      updateStatus={updateStatus}
      status={status}/>
      </Col>
    )
  }
  </Row>
)
}
</div>

export default MultipleMapsUI
