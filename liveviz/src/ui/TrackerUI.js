import React, {Component} from 'react';
import {merge} from 'ramda';
import FetchPeriodic from '../common/FetchPeriodic';
import '../styles/tracker.css';

const Target = ({x, y, type}) => {
  const targetClasses = {
    "circle": "blue-target",
    "square": "red-target",
    "triangle": "white-target",
  };
  const targetClass = targetClasses[type] || "target-unknown";
  return (
      <div className={`target-arena ${targetClass}`} style={{top: y, left: x}}>
          <div className={`target-arena-standing `}/>
      </div>
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

const TrackerFetchUI = ({error, status, running, url, targets, onSuccess, onError}) =>
<div>
  <div>{error}</div>
  <div>running:{running.toString()}</div>
  {status === "disconnected"? null :
    <FetchPeriodic
      url={ url }
      onAnimationFrame={true}
      prevent={ !running }
      onSuccess={ onSuccess }
      onError={ onError }
      />
  }
  <TrackerUI targets={targets}/>
</div>

export default TrackerFetchUI;
