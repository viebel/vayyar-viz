/**
 * Created by eliebuff on 18/05/2017.
 */
import React from 'react';
import {FormGroup, ControlLabel, Radio, Col} from 'react-bootstrap';


function Boolean ({args, onChange}){
    function truthy () {
        return (args.Value === true || args.Value === 1);
    }
    return (
        <div>
            <Col componentClass={ControlLabel} sm={6} xs={6}>
                {args.Description + ' '}
            </Col>
            <Col componentClass={ControlLabel} sm={6} xs={6}>
                {truthy () ? "true" : "false"}
            </Col>
        </div>
    );
}

export default Boolean;
