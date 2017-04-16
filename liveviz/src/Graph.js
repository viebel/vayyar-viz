import React, {Component} from 'react';
import Plotly from 'plotly.js';
import {Button} from 'react-bootstrap';


class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "n/a",
      running: true,
      drawn: false,
    }
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
      this.setState(Object.assign({}, this.state, {drawn: true}));
    }
  }

  updateGraph(id, data)
  {
    console.time('draw');
    this.draw(id, data);
    console.timeEnd('draw');
  }
  loadDataAndDraw() {
    var that = this;
    Plotly.d3.json(this.props.url, function(error, data) {
      if(!that.state.running) {
        return;
      }
      if (error) return console.warn(error);
      that.updateGraph('heatmap', data);
      that.loadDataAndDraw();
    });
  }
  componentDidMount() {
    this.loadDataAndDraw();
  }
  toggle() {
    this.setState(Object.assign({}, this.state, {running:!this.state.running}));
    this.loadDataAndDraw();
  }

  playOrPauseButtonText() {
    if(this.state.running) {
      return "Pause";
    }
    return "Play";
  }
  render() {
    return (
      <div>
        <Button
          onClick={() => this.toggle()}
          bsStyle="primary"
          >
          {this.playOrPauseButtonText()}
        </Button>
        <div id="heatmap"> </div>
      </div>
    );
  }
}
class Graph extends Component {

  render () {
    let heatmap;
    if (this.props.url) {
      heatmap = <HeatMap
        running={this.props.running}
        url={this.props.url}
        ></HeatMap>;
      } else {
        heatmap = <div>Not connected</div>;
        }
        return (
          <div>
            <h1> Heat Map </h1>
            { heatmap }
          </div>
        );
      }
    }

    export default Graph;
