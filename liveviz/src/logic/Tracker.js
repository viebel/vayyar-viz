import React, {Component} from 'react';
import FetchPeriodic from '../common/FetchPeriodic';
import TrackerUI from '../ui/TrackerUI';
import {assoc} from 'ramda';

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targets: [],
    }
  }
  render() {
    return (
      <div>
        <div>{this.state.error}</div>
        <div>running:{this.props.running.toString()}</div>
        {this.props.status === "disconnected"? null :
          <FetchPeriodic
            url={`${this.props.url}/Targets`}
            onAnimationFrame={true}
            prevent={!this.props.running}
            onSuccess={data => {
              this.setState(assoc('targets', data.targets, this.state));                this.props.updateStatus("connected");
            }}
            onError={(reason, url) => {
              this.props.updateStatus("error");
              this.setState(assoc('error', `Cannot connect to server at ${url}`, this.state));
            }}
            />
        }
        <TrackerUI targets={this.state.targets}/>
      </div>
    );
  }
}

export default Tracker;
