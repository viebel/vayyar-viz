import React, {Component} from 'react';
import {drawHeatMap} from './HeatmapUtils';

import '../../styles/heatMap.css';

class HeatMapUI extends Component {
  draw (data, drawHeatMap) {
    drawHeatMap(this.canvas, data.Data, {min: 0, max: 4000});
  }
  componentDidMount() {
    // we have to call render in order to trigger the first drawing
    // we don't want to rely on the fact that the heatmap is drawn periodically
    this.render()
  }
  render () {
    if(this.props.data && this.canvas) {
      this.draw(this.props.data, this.props.drawHeatMap || drawHeatMap);
    }
    return (
        <div className="graph-arena">
          <canvas className="heatMap-canvas" ref={element => this.canvas = element}/>
        </div>
    );
  }
}

export default HeatMapUI;
