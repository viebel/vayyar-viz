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
      url: 'http://209.9.36.2:1234/demoData2',
      connected: false,
      sensorData: undefined,
      fps: undefined,
    }
  }
  connect(url) {
    this.setState(merge(this.state, {url,connected: true}));
  }
  render() {
    let url = this.state.connected ? this.state.url : null;
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
          url={this.state.url}
          onConnect={(url) => this.connect(url)}></Connection>
        <GraphAndParams
          url={url}
          />
      </div>
    );
  }
}

export default App;
