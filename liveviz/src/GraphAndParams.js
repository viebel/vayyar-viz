import React from 'react';
import { Grid, Col, Row} from 'react-bootstrap';
import Graph from './Graph';
import Params from './Params';


function GraphAndParams ({url, status, updateStatus}) {
  return (
    <Grid>
      <Row>
        <Col md={4} xs={6}>
          <Params></Params>
        </Col>
        <Col md={8} xs={6}>
          <Row>
            <Graph
              url={url}
              type="HeatMap"
              title="Heat Map"
              updateStatus={updateStatus}
              status={status}/>
          </Row>
          <Row>
            <Graph
              url={url}
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

export default GraphAndParams;
