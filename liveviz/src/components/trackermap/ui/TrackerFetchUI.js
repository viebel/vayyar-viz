import React from 'react';
import FetchPeriodic from '../../../common/FetchPeriodic';

import TrackerUI from './TrackerUI';

const TrackerFetchUI = ({error, status, phase, url, display, targets, room, showPosture, showZLayer, showShadow, onSuccess, onError}) =>
    <div>
        {status !== "disconnected" &&
            <FetchPeriodic
                url={ url }
                onAnimationFrame={true}
                prevent={ !running }
                onSuccess={ onSuccess }
                onError={ onError }
            />
        }
        <TrackerUI
          display={display}
          room={room}
          targets={targets}
          showPosture={showPosture}
          showZLayer={showZLayer}
          showShadow={showShadow}/>
    </div>

export default TrackerFetchUI;
