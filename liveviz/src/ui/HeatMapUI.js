import React, {Component} from 'react';
import drawHeatMap from '../heatMap/heatmap';
import FetchPeriodic from '../common/FetchPeriodic';

import '../styles/heatMap.css';


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
      className="tracker-arena"
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
