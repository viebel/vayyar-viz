import React, {Component} from 'react';
import { Grid, Col, Row, Button} from 'react-bootstrap';
import Graph from './Graph';
import Params from './Params';
import {assoc} from 'ramda';


function GraphAndParamsUI ({url, status, running, updateStatus, playOrPauseButtonText, toggleRunning}) {
  return (
    <Grid>
      <Row>
        <Col md={4} xs={6}>
          <Params url={url}></Params>
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
  );
}

class GraphAndParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: true,
    };
    this.toggleRunning = this.toggleRunning.bind(this);
    this.playOrPauseButtonText = this.playOrPauseButtonText.bind(this);
  }
  playOrPauseButtonText() {
    return (this.state.running ? "Pause" : "Play");
  }
  toggleRunning() {
    this.setState(assoc("running", !this.state.running, this.state));
  }
  render() {
    return(
      <GraphAndParamsUI
        playOrPauseButtonText={this.playOrPauseButtonText}
        toggleRunning={this.toggleRunning}
        running={this.state.running}
        {...this.props}/>
    )
  }
}
export default GraphAndParams;
