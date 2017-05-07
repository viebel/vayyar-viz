import React, {Component} from 'react';
import GraphAndParamsUI from './ui/GraphAndParamsUI';
import {assoc} from 'ramda';

class GraphAndParams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      running: true,
    };
    this.toggleRunning = this.toggleRunning.bind(this);
  }
  toggleRunning() {
    this.setState(assoc("running", !this.state.running, this.state));
  }
  render() {
    return(
      <GraphAndParamsUI
        toggleRunning={this.toggleRunning}
        running={this.state.running}
        {...this.props}/>
    )
  }
}

export default GraphAndParams;
