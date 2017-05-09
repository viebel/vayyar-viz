import React, { Component } from 'react'
import AppUI from '../ui/AppUI'
import {merge} from 'ramda'

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
    const {url, status, graphKey} = this.state;
    return (
    <AppUI
      url={ url }
      status={ status }
      graphKey={ graphKey }
      onConnect={ this.connect }
      updateStatus={ this.updateStatus}
      />
    );
  }
}

export default App;
