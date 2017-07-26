import React, {Component} from 'react';
import {merge, filter, length, range, map} from 'ramda';

import TargetUI from './TargetUI';

import '../../../styles/tracker.css';

const trackerData = {
  DataType: "Tracker_Update",
  ZoneID: "Office",
  PostureVector: [
    "Lying",
    "Sitting",
    "NA",
    "NA",
    "NA",
    "NA"
  ],
  ActivityVector: [
    "Not Moving",
    "Not Moving",
    "NA",
    "NA",
    "NA",
    "NA"
  ],
  LocationMatrix: [
    [
      5,
      8
    ],
    [
      9,
      10
    ],
    [
      "NaN",
      "NaN"
    ],
    [
      "NaN",
      "NaN"
    ],
    [
      "NaN",
      "NaN"
    ],
    [
      "NaN",
      "NaN"
    ]
  ],
  ID: "Tracker_Update",
  __jTypeID: "MatGUIInterfaces.Tracker_Update, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null"
}

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
    const targets = convertData(window.notrackerData || this.props.targets);
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
              x={(target.Location[0] + sensorX) / arenaWidth * width}
              y={(target.Location[1] + sensorY) / arenaHeight * height}
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
