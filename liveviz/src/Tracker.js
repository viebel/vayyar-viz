import React, {Component} from 'react';
import d3 from 'd3';
import {merge} from 'ramda';
import './styles/tracker.css';

const json = {
  targets: [
    {
      TargetType: "triangle",
      Name: "",
      X: 1.5,
      Y: 3,
      Z: 0
    },
    {
      TargetType: "circle",
      Name: "Some Name",
      X: 2,
      Y: 2.5,
      Z: 0
    },
    {
      TargetType: "square",
      Name: "Other name",
      X: 12,
      Y: 9,
      Z: 0
    }
  ],
  ID: "Targets",
  __jTypeID: "MatGUIInterfaces.TargetsDataBlock, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
};
function Target({x, y, type}) {
  const targetClasses = {
    "circle": "target-circle",
    "square": "target-square",
    "triangle": "target-triangle",
  };
  const targetClass = targetClasses[type] || "target-unknown";
  return (
    <div className={`target-arena ${targetClass}`}
      style={{top: y, left: x}}/>
  );
}
class Tracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targets: json.targets,
      width: 0,
      height: 0,
    }
  }
  loadDataAndDraw() {
    var that = this;
    let url = that.props.url + '/Targets';
    d3.json(url, function(error, data) {
      if(!that.state.running || that.unmounted) {
        return;
      }
      if (error) {
        that.props.updateStatus("error");
        that.setState(merge(that.state, {error: `Cannot connect to server at ${url}:  ${error.statusText}`}));
        return;
      }
      that.props.updateStatus("connected");
      that.updateGraph(data);
      that.loadDataAndDraw();
    });
  }
  componentDidMount() {
    const {width, height} = this.domElement.getBoundingClientRect();
    this.setState(merge(this.state, {width, height}));
  }
  componentWillUnmount() {
    this.unmounted = true;
  }
  render() {
    const {targets, width, height} = this.state,
    [arenaWidth, arenaHeight] = [20, 10];

    return (
      <div className="tracker-arena"
           ref={element => this.domElement = element}>
        {
          targets.map (target =>
            <Target
              key={target.TargetType + "__" + target.Name}
              type={target.TargetType}
              x={(target.X + Math.random())* width/arenaWidth}
              y={(target.Y + Math.random())* height/arenaHeight}
              />
          )
        }
      </div>
    );
  }

}

export default Tracker;
