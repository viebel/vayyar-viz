import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Graph from '../ui/GraphUI'

const GraphSectionUI = ({ url, running, status, updateStatus}) =>
<div className="graphSection">
  <Row className="graphRow">
    <Col xs={6} className="fullHeight">
      <Graph
          url={url}
          running={running}
          type="Tracker"
          updateStatus={updateStatus}
          status={status}/>
    </Col>
    <Col xs={6} className="fullHeight">
      <Graph
          url={url}
          running={running}
          type="HeatMap"
          updateStatus={updateStatus}
          status={status}/>
    </Col>
  </Row>
  <Row className="graphRow">
    <Col xs={6} className="fullHeight">
      <Graph
          url={url}
          running={running}
          type="Tracker"
          updateStatus={updateStatus}
          status={status}/>
    </Col>
    <Col xs={6} className="fullHeight">
      <Graph
          url={url}
          running={running}
          type="HeatMap"
          updateStatus={updateStatus}
          status={status}/>
    </Col>
  </Row>
</div>

export default GraphSectionUI
