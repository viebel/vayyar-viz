import React from 'react';
import FetchPeriodic from '../../../common/FetchPeriodic';

const TrackerInitFetchUI = ({error, status, room, phase, urlGetTrackerInit, onSuccess, onError}) =>
    <div>
        {status !== "disconnected" &&
            <FetchPeriodic
                url={ urlGetTrackerInit }
                onAnimationFrame={true}
                prevent={phase !== 'RUNNING'}
                onSuccess={ onSuccess }
                onError={ onError }
            />
        }
    </div>

export default TrackerInitFetchUI;
