import React, {Component} from 'react';
import {drawHeatMap} from './HeatmapUtils';

import '../../styles/heatMap.css';

class HeatMapUI extends Component {
  draw (data) {
    drawHeatMap(this.canvas, data.Data, {min: 0, max: 4000});
  }
  render () {
    if(this.props.data && this.canvas) {
      this.draw(this.props.data);
    }
    return (
        <div className="graph-arena">
          <canvas className="heatMap-canvas" ref={element => this.canvas = element}/>
        </div>
    );
  }
}

export default HeatMapUI;
