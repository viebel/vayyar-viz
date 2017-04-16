import React, { Component } from 'react';
import { Grid, Jumbotron, Button, FormGroup,
         FormControl, Form} from 'react-bootstrap';

class Connection extends Component {
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
    this.setState(Object.assign({}, this.state, {url: e.target.value}));
  }
  getValidationState () {
    return 'error';
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
              controlId="url"
              validationState={this.getValidationState()}>
              <FormControl
                type="text"
                ref="url"
                value={this.state.url}
                onChange={(e) => this.handleChangeUrl(e)}
                placeholder="Url of the sensor server">
              </FormControl>
              <FormControl.Feedback />
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

export default Connection;
