import React, {Component} from 'react';
import { Grid, Jumbotron, Button, FormGroup,
         FormControl, Form, Col} from 'react-bootstrap';

import Graph from './Graph';


class Params extends Component {
   render() {
     return (
       <h1> Params </h1>
     );
   }
}


class GraphAndParams extends Component {
  constructor(props) {
    super(props);
  }
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
