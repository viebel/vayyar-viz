import React, {Component} from 'react'
import {transpose, clone, flatten} from 'ramda'
import {drawHeatMap} from './HeatmapUtils'

import '../../styles/heatMap.css';

class HeatMapUI extends Component {
  flipData(data) {
    var newData = clone(data);
    newData.reverse();
    for (var i = 0; i < newData.length; i++) {
        newData[i].reverse();
      }
    return newData;
    }

    rotateData(data) {
      data = transpose(data);
      for (var i = 0; i < data.length; i++) {
          data[i].reverse();
        }
      return data;
  }


  draw (data, drawHeatMap) {
    const values = flatten(data)
    drawHeatMap(this.canvas, data, {min: Math.min.apply(null, values), max: Math.max.apply(null, values)});
  }
  componentDidMount() {
    // we have to call render in order to trigger the first drawing
    // we don't want to rely on the fact that the heatmap is drawn periodically
    this.render()
  }
  render () {
    if(this.props.data && this.canvas) {
      var returnData = (this.props.display.flipped) ? this.flipData(this.props.data.Data) : this.props.data.Data
      returnData = (this.props.display.rotated) ? this.rotateData(returnData) : returnData
        this.draw(returnData, this.props.drawHeatMap || drawHeatMap);
    }
    return (
        <div className="graph-arena">
          <canvas className="heatMap-canvas" ref={element => this.canvas = element}/>
        </div>
    );
  }
}

export default HeatMapUI;
