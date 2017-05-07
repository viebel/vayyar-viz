import React, {Component} from 'react';
import HeatMapUI from '../ui/HeatMapUI';
import {assoc} from 'ramda';


class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onError = this.onError.bind(this);
  }
  onError(reason, url) {
    this.props.updateStatus("error");
    this.setState(assoc('error', `Cannot connect to server at ${url}`, this.state));
  }
  render() {
    return (
      <div>
      <div> {this.state.error} </div>
      <HeatMapUI
      {...this.props}
      onError={this.onError}/>
      </div>
    );
  }
}

export default HeatMap;
