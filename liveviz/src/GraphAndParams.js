import React from 'react';
import { Grid, Col} from 'react-bootstrap';
import Graph from './Graph';
import Params from './Params';


function GraphAndParams ({url, status, updateStatus}) {
    return (
      <Grid>
        <Col md={4} xs={6}>
          <Params></Params>
        </Col>
        <Col md={8} xs={6}>
          <Graph
            url={url} 
            updateStatus={updateStatus}
            status={status}/>
        </Col>
      </Grid>
    );
  }

export default GraphAndParams;
