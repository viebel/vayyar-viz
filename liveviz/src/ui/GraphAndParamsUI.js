import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import Graph from '../ui/GraphUI';
import Params from '../logic/Params';


const playOrPauseButtonText = (running) =>
running ? "Pause" : "Play"

const GraphAndParamsUI = ({url, status, running, updateStatus, toggleRunning}) =>
<Grid>
  <Row>
    <Col md={3} xs={5}>
      <Params url={url} status={status} running={running}></Params>
    </Col>
    <Col md={9} xs={7}>
      <Row>
        <Button
          onClick={ toggleRunning }
          bsStyle="primary">
          { playOrPauseButtonText(running) }
        </Button>
      </Row>
      <Row>
        <Col  md={6}>
          <Graph
              url={url}
              running={running}
              type="HeatMap"
              title="Heat Map"
              updateStatus={updateStatus}
              status={status}/>
        </Col>
        <Col md={6}>
          <Graph
              url={url}
              running={running}
              type="HeatMap"
              title="Heat Map"
              updateStatus={updateStatus}
              status={status}/>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Graph
              url={url}
              running={running}
              type="Tracker"
              title="Tracker"
              updateStatus={updateStatus}
              status={status}/>
        </Col>
        <Col md={6}>
          <Graph
              url={url}
              running={running}
              type="Tracker"
              title="Tracker"
              updateStatus={updateStatus}
              status={status}/>
        </Col>
      </Row>
    </Col>
  </Row>
</Grid>


  export default GraphAndParamsUI;
