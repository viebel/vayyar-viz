import React, {Component} from 'react';
import Plotly from 'plotly.js';
import draw from './heatmap/heatmap'
import {merge, assoc} from 'ramda';

class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "n/a",
      drawn: false,
    }
  }
  draw(data) {
    draw(this.canvas, data.Data, {min: 0, max: 4000});
  }

  updateGraph(data) {
    this.draw(data);
  }
  loadDataAndDraw() {
    const that = this,
    url = that.props.url + '/demoData2';
    Plotly.d3.json(url, function(error, data) {
      if(!that.props.running || that.unmounted) {
        return;
      }
      if (error) {
        that.props.updateStatus("error");
        that.setState(assoc('error', `Cannot connect to server at ${url}`, that.state));
        return;
      }
      that.props.updateStatus("connected");
      that.updateGraph(data);
      that.loadDataAndDraw();
    });
  }
  componentDidMount() {
    if(this.props.status !== "disconnected") {
      this.loadDataAndDraw();
    }
  }
  componentWillUnmount() {
    this.unmounted = true;
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.running && !this.props.running) {
      if(this.props.status === "connected") {
        this.loadDataAndDraw();
      }
    }
  }

  render() {
      return (
        <div>
         <div>{this.state.error}</div>
         <canvas
           width="600"
           height="400"
           ref={element => this.canvas = element}/>
        </div>
      );
    }
  }

  export default HeatMap;
