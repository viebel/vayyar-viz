import React, {Component} from 'react';
import drawHeatMap from '../heatmap/heatmap';
import FetchPeriodic from '../common/FetchPeriodic';


class HeatMapUI extends Component {
  draw (data) {
    drawHeatMap(this.canvas, data.Data, {min: 0, max: 4000});
  }
  render () {
    if(this.props.data && this.canvas) {
      this.draw(this.props.data);
    }
    return (
      <canvas
      width="600"
      height="400"
      ref={element => this.canvas = element}/>
    );
  }
}


const HeatMapFetchUI = ({error, status, running, url, data, onSuccess, onError}) =>
  <div>
    <div>running:{running.toString()}</div>
    <div> {error} </div>
    {status === "disconnected"? null :
      <div>
        <FetchPeriodic
          url={ url }
          onAnimationFrame={true}
          prevent={!running}
          onSuccess={ onSuccess }
          onError={ onError }
          />
        <HeatMapUI
          data={ data }
          />
      </div>
    }
  </div>

export default HeatMapFetchUI;
