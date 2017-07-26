import React from 'react';
import FetchPeriodic from '../../common/FetchPeriodic';

import ThreeDUI from './ThreeDUI';


const ThreeDFetchUI = ({error, status, phase, url, data, display, view, onSuccess, onError}) =>
    <div id="threeDcont">
        {status === "disconnected"? null :
            <div>
                <FetchPeriodic
                    url={ url }
                    onAnimationFrame={true}
                    prevent={phase !== 'RUNNING'}
                    onSuccess={ onSuccess }
                    onError={ onError }
                />
                <ThreeDUI
                    view={ view }
                    display={ display }
                    data={ data }
                />
            </div>
        }
    </div>

export default ThreeDFetchUI;
