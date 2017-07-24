import React from 'react';
import ParamsListUI from './ParamsListUI';

const ParamsBlockUI = ({group, updateParam, params, isEditable, isRunning}) =>
    <div key={group} >
        <h4> {group} </h4>
        <ParamsListUI
            updateParam={updateParam}
            params={params}
            isEditable={(isEditable && !isRunning)}>
        </ParamsListUI>
    </div>

export default ParamsBlockUI
