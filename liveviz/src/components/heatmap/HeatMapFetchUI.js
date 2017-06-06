import React from 'react';
import FetchPeriodic from '../../common/FetchPeriodic';

import HeatMapUI from './HeatMapUI';


const HeatMapFetchUI = ({error, status, running, url, data, onSuccess, onError}) =>
    <div>
        <div> {error} </div>
        {status === "disconnected"? null :
            <div>
                <FetchPeriodic
                    url={ url }
                    onAnimationFrame={true}
                    prevent={!running}
                    onSuccess={ onSuccess }
                    onError={ onError }
                />
                <HeatMapUI
                    data={ data }
                />
            </div>
        }
    </div>

export default HeatMapFetchUI;