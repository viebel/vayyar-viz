import React from 'react';
import FetchPeriodic from '../../common/FetchPeriodic';

import HeatMapUI from './HeatMapUI';


const HeatMapFetchUI = ({error, status, phase, url, data, display, onSuccess, onError}) =>
    <div>
        {status === "disconnected"? null :
            <div>
                <FetchPeriodic
                    url={ url }
                    onAnimationFrame={true}
                    prevent={phase !== 'RUNNING'}
                    onSuccess={ onSuccess }
                    onError={ onError }
                />
                <HeatMapUI
                    display={ display }
                    data={ data }
                />
            </div>
        }
    </div>

export default HeatMapFetchUI;
