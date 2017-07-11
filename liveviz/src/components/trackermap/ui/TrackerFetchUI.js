import React from 'react';
import FetchPeriodic from '../../../common/FetchPeriodic';

import TrackerUI from './TrackerUI';

const TrackerFetchUI = ({error, status, running, url, targets, showPosture, showZLayer, showShadow, onSuccess, onError}) =>
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
          targets={targets}
          showPosture={showPosture}
          showZLayer={showZLayer}
          showShadow={showShadow}/>
    </div>

export default TrackerFetchUI;
