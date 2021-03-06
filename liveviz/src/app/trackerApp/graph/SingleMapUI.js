import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LayeredMap from './layeredMap/logic/LayeredMap'


const SingleMapUI = ({url, running, status, updateStatus}) =>
<div className="graphSection">
  <Row className="graphRow100">
    <Col xs={12} className="fullHeight pr-0 pl-0">
      <LayeredMap
        view="singleMap"
        url={url}
        running={running}
        updateStatus={updateStatus}
        status={status}/>
    </Col>
  </Row>
</div>

export default SingleMapUI
