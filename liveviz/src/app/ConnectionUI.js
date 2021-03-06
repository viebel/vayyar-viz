import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Form} from 'react-bootstrap';
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
        <div className="connection navbar-form navbar-left">
            <Form className="form-inline">
                <FormGroup controlId="url" className="connectionTitle">
                    Connect to a sensor:
                </FormGroup>
                <FormGroup controlId="url">
                    <FormControl
                        type="text"
                        ref="url"
                        value={this.state.url}
                        onChange={(e) => this.handleChangeUrl(e)}
                        placeholder="Url of the sensor server">
                    </FormControl>
                </FormGroup>

                <Button
                    onClick={() => this.connect()}
                    type="button"
                    bsStyle="primary">
                    Connect
                </Button>
            </Form>
        </div>
  );
}
}

export default ConnectionUI;
