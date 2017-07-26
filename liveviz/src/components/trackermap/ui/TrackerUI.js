import React, {Component} from 'react';
import {merge, filter, length, range, map} from 'ramda';

import TargetUI from './TargetUI';

import '../../../styles/tracker.css';

const convertData = (data) => {
  const nTargets = Math.min(length(filter(x=> x !== "NA", data.PostureVector)), length(filter(x=> x[0] !== "NaN", data.LocationMatrix)))
  const colors = ["blue", "green", "orange", "blue", "blue"]
  return map(i => ({
    color: colors[i],
    Posture: data.PostureVector[i],
    Activity: data.ActivityVector[i],
    Location: data.LocationMatrix[i],
    idx: i,
  }), range(0, nTargets))
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
    const {width, height} = this.state;
    const {arenaWidth, arenaHeight} = this.props.room.Data[0]
    const {sensorX, sensorY} = this.props.room.Data[1]
    const targets = convertData(window.notrackerData || this.props.targets)

    return (
      <div className="graph-arena"
        ref={element => this.domElement = element}>
        {
          map(target =>
            <TargetUI
              key={target.idx}
              type={target.color}
              posture={target.Posture}
              color={target.color}
              x={(this.props.display.rotated) ? ((this.props.display.flipped) ? height - 75 - ((target.Location[1] + sensorY) / arenaHeight * height) : (target.Location[1] + sensorY) / arenaHeight * height) : ((this.props.display.flipped) ? width - 40 - ((target.Location[0] + sensorX) / arenaWidth * width) : (target.Location[0] + sensorX) / arenaWidth * width)}
              y={(this.props.display.rotated) ? ((this.props.display.flipped) ? (target.Location[0] + sensorX) / arenaWidth * width :  width - 40 - ((target.Location[0] + sensorX) / arenaWidth * width)) : ((this.props.display.flipped) ? height - 75 - ((target.Location[1] + sensorY) / arenaHeight * height) : (target.Location[1] + sensorY) / arenaHeight * height)}
              z={0}
              showPosture={this.props.showPosture}
              showZLayer={this.props.showZLayer}
              showShadow={this.props.showShadow}
              /* TODO: read from server when it returns the posture*/
              />,
            targets)
          }
        </div>
      );
    }
  }

  export default TrackerUI;
