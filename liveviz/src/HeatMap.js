import React, {Component} from 'react';
import Plotly from 'plotly.js';
import {Button} from 'react-bootstrap';
import {merge} from 'ramda';

class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "n/a",
      running: true,
      drawn: false,
    }
    this.toggle = this.toggle.bind(this);
  }
  draw(id, data) {
    if(this.state.drawn) {
      Plotly.restyle(id, {z: [data.Data]});
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
      Plotly.newPlot(id, d, layout);
      this.setState(merge(this.state, {drawn: true}));
    }
  }

  updateGraph(id, data)
  {
    this.draw(id, data);
  }
  loadDataAndDraw() {
    var that = this;
    let url = that.props.url + '/demoData2';
    Plotly.d3.json(url, function(error, data) {
      if(!that.state.running || that.unmounted) {
        return;
      }
      if (error) {
        that.props.updateStatus("error");
        that.setState(merge(that.state, {error: `Cannot connect to server at ${url}:  ${error.statusText}`}));
        return;
      }
      that.props.updateStatus("connected");
      that.updateGraph('heatmap', data);
      that.loadDataAndDraw();
    });
  }
  componentDidMount() {
    this.loadDataAndDraw();
  }
  componentWillUnmount() {
    this.unmounted = true;
  }
  toggle() {
    this.setState(merge(this.state, {running: !this.state.running}));
    this.loadDataAndDraw();
  }
  playOrPauseButtonText() {
    if(this.state.running) {
      return "Pause";
    }
    return "Play";
  }
  render() {
    let errorOrMap;
    let {status} = this.props;
    if (status === "error") {
      errorOrMap = <div>{this.state.error}</div>;
    }  else {
      errorOrMap = <div id="heatmap"/>;
    }
    return (
      <div>
        <Button
          onClick={ this.toggle }
          bsStyle="primary">
          { this.playOrPauseButtonText() }
        </Button>
        <div>Status: { status }</div>
        { errorOrMap }
      </div>
    );
  }
}

export default HeatMap;
