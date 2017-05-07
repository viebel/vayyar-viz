import React, {Component} from 'react';
import drawHeatMap from './heatmap/heatmap';
import FetchPeriodic from './common/FetchPeriodic';
import {assoc} from 'ramda';

class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "n/a",
    }
  }
  draw(data) {
    drawHeatMap(this.canvas, data.Data, {min: 0, max: 4000});
  }

  render() {
    return (
      <div>
        <div>{this.state.error}</div>
          <div>running:{this.props.running.toString()}</div>

        {this.props.status === "disconnected"? null :
          <div>
            <FetchPeriodic
              url={`${this.props.url}/demoData2`}
              onAnimationFrame={true}
              prevent={!this.props.running}
              onSuccess={data => {
                this.draw(data);
                this.props.updateStatus("connected");
              }}
              onError={(reason, url) => {
                this.props.updateStatus("error");
                this.setState(assoc('error', `Cannot connect to server at ${url}`, this.state));
              }}
              />
            <canvas
              width="600"
              height="400"
              ref={element => this.canvas = element}/>
          </div>
        }
      </div>
    );
  }
}

export default HeatMap;
