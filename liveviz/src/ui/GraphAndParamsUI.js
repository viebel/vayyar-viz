import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import Graph from '../ui/GraphUI';
import Params from '../logic/Params';
import '../styles/params.css'
import '../styles/graph.css'



    


const playOrPauseButtonText = (running) =>
running ? <i className="glyphicon glyphicon-pause"></i> : <i className="glyphicon glyphicon-play"></i>

const GraphAndParamsUI = ({ url, status, displayParams, running, updateStatus, toggleRunning, toggleParams }) =>
<Grid fluid="true" id="graph-params" className={"" + displayParams? "paramsDisplayed" : "paramsHidden" }>
  <div id="page-content-wrapper" className="fullHeight">
    <div className="page-toolbar">
        <Button
          onClick={ toggleRunning }
          bsStyle="primary">
          { playOrPauseButtonText(running) }
        </Button>
        <Button
          id="menu-toggle"
          onClick={ toggleParams }
          bsStyle="primary">
          {displayParams? "Hide Params" : "Show Params"}
        </Button>
    </div>
    <div className="graphSection">
      <Row className="graphRow">
        <Col md={6} className="fullHeight">
          <Graph
              url={url}
              running={running}
              type="Tracker"
              updateStatus={updateStatus}
              status={status}/>
        </Col>
        <Col md={6} className="fullHeight">
          <Graph
              url={url}
              running={running}
              type="HeatMap"
              updateStatus={updateStatus}
              status={status}/>
        </Col>
      </Row>
      <Row className="graphRow">
        <Col md={6} className="fullHeight">
          <Graph
              url={url}
              running={running}
              type="Tracker"
              updateStatus={updateStatus}
              status={status}/>
        </Col>
        <Col md={6} className="fullHeight">
          <Graph
              url={url}
              running={running}
              type="HeatMap"
              updateStatus={updateStatus}
              status={status}/>
        </Col>
      </Row>
    </div>
  </div>
  { displayParams?
    <div id="sidebar-wrapper">
      <Params url={url} status={status} running={running}></Params>
    </div> : null
  }
</Grid>

export default GraphAndParamsUI;
