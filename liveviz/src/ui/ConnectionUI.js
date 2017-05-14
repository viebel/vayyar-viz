import React, { Component } from 'react';
import { Grid, Jumbotron, Button, FormGroup, FormControl, Form} from 'react-bootstrap';
import {merge} from 'ramda';

class ConnectionUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
    };
  }
  connect() {
    this.props.onConnect(this.state.url);
    return true;
  }
  handleChangeUrl(e) {
    let url = e.target.value;
    this.setState(merge(this.state, {url}));
  }
  render() {
    return (
      <Jumbotron>
        <Grid>
          <h1>Welcome to Vayyar</h1>
          <p>
            Connect to a sensor <br></br>
        </p>
        <Form inline>
          <FormGroup
            controlId="url">
            <FormControl
              type="text"
              ref="url"
              value={this.state.url}
              onChange={(e) => this.handleChangeUrl(e)}
              placeholder="Url of the sensor server">
            </FormControl>
          </FormGroup>
          {' '}
          <Button
            onClick={() => this.connect()}
            type="button"
            bsStyle="primary">
            Connect
          </Button>
        </Form>
      </Grid>
    </Jumbotron>
  );
}
}

export default ConnectionUI;
