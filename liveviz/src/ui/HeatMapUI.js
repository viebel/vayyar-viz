import React, {Component} from 'react';
import drawHeatMap from '../heatmap/heatmap';

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

export default HeatMapUI;
