import React, {Component} from 'react';
import {merge} from 'ramda';

import TargetUI from './TargetUI';

import '../../../styles/tracker.css';

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
    [arenaWidth, arenaHeight] = [20, 10]

    return (
      <div className="graph-arena"
        ref={element => this.domElement = element}>
        {
          targets.map (target =>
            <TargetUI
              key={target.TargetType + "__" + target.Name}
              type={target.TargetType}
              x={(target.X + Math.random())* width/arenaWidth}
              y={(target.Y + Math.random())* height/arenaHeight}
              z={target.Z}
              showPosition={this.props.showPosition}
              showZLayer={this.props.showZLayer}
              showShadow={this.props.showShadow}
              /* TODO: read from serve when it returns the posture*/
              />
          )
        }
      </div>
    );
  }
}

export default TrackerUI;


