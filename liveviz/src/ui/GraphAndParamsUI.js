import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import Graph from '../Graph';
import Params from '../Params';


const playOrPauseButtonText = (running) =>
  running ? "Pause" : "Play"

const GraphAndParamsUI = ({url, status, running, updateStatus, toggleRunning}) =>
    <Grid>
      <Row>
        <Col md={4} xs={6}>
          <Params url={url} status={status} running={running}></Params>
        </Col>
        <Col md={8} xs={6}>
          <Row>
            <Button
              onClick={ toggleRunning }
              bsStyle="primary">
              { playOrPauseButtonText() }
            </Button>
          </Row>
          <Row>
            <Graph
              url={url}
              running={running}
              type="HeatMap"
              title="Heat Map"
              updateStatus={updateStatus}
              status={status}/>
          </Row>
          <Row>
            <Graph
              url={url}
              running={running}
              type="Tracker"
              title="Tracker"
              updateStatus={updateStatus}
              status={status}/>
          </Row>
        </Col>
      </Row>
    </Grid>


export default GraphAndParamsUI;
