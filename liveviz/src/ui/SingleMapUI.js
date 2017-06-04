import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LayeredMapUI from '../ui/LayeredMapUI'


const SingleMapUI = ({ slice, layers, url, running, status, updateStatus}) =>
<div className="graphSection">
  <Row className="graphRow100">
    <Col xs={12} className="fullHeight">
      <LayeredMapUI
        view="singleMap"
        slice={slice}
        layers={layers}
        url={url}
        running={running}
        updateStatus={updateStatus}
        status={status}/>
    </Col>
  </Row>
</div>

export default SingleMapUI
