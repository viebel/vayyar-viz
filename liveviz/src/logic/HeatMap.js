import React, {Component} from 'react';
import HeatMapUI from '../ui/HeatMapUI';
import FetchPeriodic from '../common/FetchPeriodic';

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
    const {updateStatus, status, running, url} = this.props;
    return (
      <div>
        <div>running:{this.props.running.toString()}</div>
        <div> {this.state.error} </div>
        {status === "disconnected"? null :
          <div>
            <FetchPeriodic
              url={`${url}/demoData2`}
              onAnimationFrame={true}
              prevent={!running}
              onSuccess={data => {
                this.setState(assoc('data', data, this.state));
                updateStatus("connected");
              }}
              onError={this.onError}
              />
            <HeatMapUI
              data={this.state.data}
              />
          </div>
        }
      </div>
      );
    }
  }

  export default HeatMap;
