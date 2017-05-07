import React, {Component} from 'react';
import FetchPeriodic from './common/FetchPeriodic';
import {merge, assoc} from 'ramda';
import './styles/tracker.css';

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
      targets: [],
      width: 0,
      height: 0,
    }
  }
  componentDidMount() {
    const {width, height} = this.domElement.getBoundingClientRect();
    this.setState(merge(this.state, {width, height}));
  }
  render() {
    const {targets, width, height} = this.state,
    [arenaWidth, arenaHeight] = [20, 10];

    return (
      <div>
        <div>{this.state.error}</div>
        <div>running:{this.props.running.toString()}</div>
        {this.props.status === "disconnected"? null :
            <FetchPeriodic
              url={`${this.props.url}/Targets`}
              onAnimationFrame={true}
              prevent={!this.props.running}
              onSuccess={data => {
                this.setState(assoc('targets', data.targets, this.state));                this.props.updateStatus("connected");
              }}
              onError={(reason, url) => {
                this.props.updateStatus("error");
                this.setState(assoc('error', `Cannot connect to server at ${url}`, this.state));
              }}
              />
        }
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
    </div>
  );
}

}

export default Tracker;
