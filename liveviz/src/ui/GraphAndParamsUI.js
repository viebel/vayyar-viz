import React from 'react';
import {Grid, Col, Row, Button} from 'react-bootstrap';
import Graph from '../ui/GraphUI';
import Params from '../logic/Params';


const playOrPauseButtonText = (running) =>
running ? "Pause" : "Play"

const GraphAndParamsUI = ({url, status, running, updateStatus, toggleRunning}) =>
<Grid>
    <div id="page-content-wrapper">
        <Grid>
            <Row>
                <Col md={12}>
                    <Button
                      onClick={ toggleRunning }
                      bsStyle="primary">
                      { playOrPauseButtonText(running) }
                    </Button>
                    <Button 

                       id="menu-toggle"
                       bsStyle="primary">
                       Toggle Param
                    </Button>
                    <Row>
                        <Col md={6}>
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
    </div>
    <div id="sidebar-wrapper">

      <Params url={url} status={status} running={running}></Params>
    </div>


</Grid>

  export default GraphAndParamsUI;
