import React, {Component} from 'react';
import Plotly from 'plotly.js';
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
    if(this.state.drawn) {
      Plotly.restyle(this.container, {z: [data.Data]});
    } else {
      var axisTemplate = {
        range: [data.X0, data.X1],
        autorange: false,
        showgrid: true,
        zeroline: false,
        linecolor: 'black',
        showticklabels: true,
        ticks: ''
      };

      var layout = {
        xaxis: axisTemplate,
        yaxis: axisTemplate,
        showlegend: false,
      };

      var d = [
        {
          colorscale: 'Jet',
          z: data.Data,
          zmin: 0,
          zmax: 4000,
          type: 'heatmapgl'
        }
      ];
      Plotly.newPlot(this.container, d, layout);
      this.setState(merge(this.state, {drawn: true}));
    }
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
      this.loadDataAndDraw();
    }
  }

  render() {
    let errorOrMap;
    let {status} = this.props;
    if (status === "error") {
      errorOrMap = <div>{this.state.error}</div>;
      }  else {
        errorOrMap = <div ref={element => this.container = element}/>;
      }
      return (
        <div>
          { errorOrMap }
        </div>
      );
    }
  }

  export default HeatMap;
