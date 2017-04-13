import React, {Component} from 'react';
import Plotly from 'plotly.js';
import { Grid, Jumbotron, Button, FormGroup, FormControl, Form, Col} from 'react-bootstrap';


function draw(data) {
    if(window.drawn) {
	Plotly.restyle('heatmap', {z: [data.Data]});
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
  	    title: 'Heatmap test',
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
	Plotly.newPlot('heatmap', d, layout);
	window.drawn = true;
    }
}

function updateGraph(data)
{
    console.time('draw');
    draw(data);
    console.timeEnd('draw');
}

function loadDataAndDraw(url) {

  Plotly.d3.json(url, function(error, data) {
    if (error) return console.warn(error);
    updateGraph(data);
    loadDataAndDraw(url);
  });
}


class HeatMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "n/a",
    }
  }
  updateData() {
    this.setState({data: Math.random()});
  }
  componentDidMount() {
    loadDataAndDraw(this.props.url);
  }
  render() {
    return (
      <div id="heatmap"> </div>
    );
  }
}
class Graph extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let heatmap;
    if (this.props.url) heatmap = <HeatMap url={this.props.url}></HeatMap>;
      return (
        <div>
          <h1> Heat Map {this.props.url}</h1>
          { heatmap }
        </div>
      );
    }
  }

  export default Graph;
