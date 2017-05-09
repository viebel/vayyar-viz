import React, {Component} from 'react';
import {merge} from 'ramda';
import '../styles/tracker.css';

const Target = ({x, y, type}) => {
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

class TrackerUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    }
  }
  componentDidMount() {
    const {width, height} = this.domElement.getBoundingClientRect();
    this.setState(merge(this.state, {width, height}));
  }
  render() {
    const {width, height} = this.state,
    {targets} = this.props,
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

export default TrackerUI;
