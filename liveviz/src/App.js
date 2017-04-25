import React, { Component } from 'react';
import Connection from './Connection';
import GraphAndParams from './GraphAndParams';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';
import { Grid, Navbar} from 'react-bootstrap';
import {merge} from 'ramda';

class App extends Component {
  constructor() {
    super();
    this.state = {
      url: 'http://209.9.36.2:1234',
      status: "disconnected",
      graphKey: 0,
    }
    this.connect = this.connect.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }
  connect(url) {
    this.setState(merge(this.state, {url, status: "connecting", graphKey: this.state.graphKey+1}));
  }
  updateStatus(status) {
    this.setState(merge(this.state, {status}));
  }
  render() {
    let {url, status} = this.state;
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Vayyar Live Visualization </a>
              </Navbar.Brand>
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Connection
          url={url}
          onConnect={this.connect}></Connection>
        <GraphAndParams
          key={ this.state.graphKey } /* use key in order to force re-mounting each time we re-connect */
          url={ url }
          status={ status }
          updateStatus={this.updateStatus}/>
      </div>
    );
  }
}

export default App;
