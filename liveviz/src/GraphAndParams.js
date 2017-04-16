import React, {Component} from 'react';
import { Grid, Jumbotron, Button, FormGroup,
         FormControl, Form, Col} from 'react-bootstrap';

import Graph from './Graph';
import Params from './Params';



class GraphAndParams extends Component {
  render() {
    return (
      <Grid>
        <Col md={4} xs={6}>
          <Params></Params>
        </Col>
        <Col md={8} xs={6}>
          <Graph url={this.props.url}></Graph>
        </Col>
      </Grid>
    );
  }
}

export default GraphAndParams;
