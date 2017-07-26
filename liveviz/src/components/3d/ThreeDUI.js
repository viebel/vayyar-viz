import React, {Component} from 'react'
import {drawPlot} from './ThreeDUtils'

import '../../styles/threeD.css';

class ThreeDUI extends Component {
  draw (data, display, view, drawPlot) {
    drawPlot(this.div, data.Data, view, display.flipped, display.rotated)
  }
  componentDidMount() {
    // we have to call render in order to trigger the first drawing
    // we don't want to rely on the fact that the heatmap is drawn periodically
    this.render()
  }
  render () {
    if(this.props.data && this.div) {
      this.draw(this.props.data, this.props.display, this.props.view, this.props.drawPlot || drawPlot)
    }
    return (
        <div className="graph-arena">
            <div id="three-D-plot" ref={element => this.div = element}/>
        </div>
    );
  }
}

export default ThreeDUI
