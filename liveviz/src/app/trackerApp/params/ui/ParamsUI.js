import React from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap';
import {map, keys } from 'ramda';
import ParamsBlockUI from './ParamsBlockUI';


const ParamsUI = ({params, paramsByCategory, updateParam, resetParams, sendParams, phase, isEditable, changeParamsStatus}) =>
    <div>
        <div className="mode-toggle">
            <Button
                className={keys(paramsByCategory).length > 0 ? "" : "hidden" }
                onClick={ changeParamsStatus }
                bsStyle="primary">
                <i className={`glyphicon
          ${(isEditable && (phase === 'STOPPED' || phase === 'DISCONNECTED'))? "glyphicon-ok": "glyphicon-pencil"}`}
                />
            </Button>
        </div>
        <div className="connection-message"> </div>
        {
            map( group =>
                <ParamsBlockUI
                    phase={ phase }
                    key={group}
                    updateParam={updateParam}
                    group={group}
                    params={paramsByCategory[group]}
                    isEditable={isEditable && (phase === 'STOPPED' || phase === 'DISCONNECTED')}/>
            )(keys(paramsByCategory))
        }
        <ButtonToolbar className={(isEditable && (phase === 'STOPPED' || phase === 'DISCONNECTED')) ? "" : "hidden" }>
            <Button
                onClick={ resetParams }
                bsStyle="primary">
                Reset
            </Button>
            <Button
                onClick={ sendParams }
                bsStyle="primary">
                Update
            </Button>
        </ButtonToolbar>
    </div>

export default ParamsUI
