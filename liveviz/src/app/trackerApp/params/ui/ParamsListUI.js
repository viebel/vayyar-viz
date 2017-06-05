import React from 'react';
import {Form} from 'react-bootstrap';

import ParamUI from './ParamUI';

const ParamsListUI = ({params, updateParam, isEditable}) =>
    <Form horizontal>
        {
            params.map (param =>
                <ParamUI
                    onChange={(val) => updateParam(param.ActualName, val)}
                    key={param.ActualName}
                    args={param}
                    type={param.VariableType}
                    isEditable={isEditable}>
                </ParamUI>
            )
        }
    </Form>

export default ParamsListUI