import React from 'react';
import FetchPeriodic from '../../../common/FetchPeriodic';

const TrackerInitFetchUI = ({error, status, room, running, url, onSuccess, onError}) =>
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
    </div>

export default TrackerInitFetchUI;
