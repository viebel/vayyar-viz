import React from 'react'
import {Button, ButtonToolbar} from 'react-bootstrap';
import {map, keys } from 'ramda';
import ParamsBlockUI from './ParamsBlockUI';

const ParamsUI = ({params, paramsByCategory, updateParam, resetParams, sendParams, status, error, isEditable, changeParamsStatus}) =>
    <div>
        <div className="mode-toggle">
            <Button
                className={keys(paramsByCategory).length > 0 ? "" : "hidden" }
                onClick={ changeParamsStatus }
                bsStyle="primary">
                <i className={`glyphicon
          ${isEditable? "glyphicon-ok": "glyphicon-pencil"}`}
                />
            </Button>
        </div>
        <div className="err-message"> {error}</div>
        {
            map( group =>
                <ParamsBlockUI
                    key={group}
                    updateParam={updateParam}
                    group={group}
                    params={paramsByCategory[group]}
                    isEditable={isEditable}/>
            )(keys(paramsByCategory))
        }
        <ButtonToolbar className={isEditable ? "" : "hidden" }>
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