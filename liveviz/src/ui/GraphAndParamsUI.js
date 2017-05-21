import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import Graph from '../ui/GraphUI';
import Params from '../logic/Params';


const playOrPauseButtonText = (running) =>
running ? "Pause" : "Play"

const GraphAndParamsUI = ({ url, status, displayParams, running, updateStatus, toggleRunning, toggleParams }) =>
<Grid id="graph-params" className={displayParams? "paramsDisplayed" : "paramsHidden"}>
  <div id="page-content-wrapper">
    <Button
      onClick={ toggleRunning }
      bsStyle="primary">
      { playOrPauseButtonText(running) }
    </Button>
    <Button
      id="menu-toggle"
      onClick={ toggleParams }
      bsStyle="primary">
      Toggle Params
    </Button>
    <Row>
      <Col md={6}>
        <Graph
          url={url}
          running={running}
          type="Tracker"
          updateStatus={updateStatus}
          status={status}/>
      </Col>
      <Col md={6}>
        <Graph
          url={url}
          running={running}
          type="HeatMap"
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
          updateStatus={updateStatus}
          status={status}/>
      </Col>
      <Col md={6}>
        <Graph
          url={url}
          running={running}
          type="HeatMap"
          updateStatus={updateStatus}
          status={status}/>
      </Col>
    </Row>
  </div>
  { displayParams?
    <div id="sidebar-wrapper">
      <Params url={url} status={status} running={running}></Params>
    </div> : null
  }
</Grid>

export default GraphAndParamsUI;
