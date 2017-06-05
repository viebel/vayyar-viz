import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LayeredMap from './layeredMap/logic/LayeredMap'


const MultipleMapsUI = ({ url, running, status, updateStatus}) =>
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
      <LayeredMap
      view="multipleMap"
      mapIdx={i}
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
