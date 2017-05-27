import React from 'react';
import {FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';

const TextInput = ({args, onChange}) => {
   return(
        <FormGroup>
            <Col componentClass={ControlLabel} xs={12}>
                {args.Description}
            </Col>
            <Col xs={12}>
                <FormControl
                    type="text"
                    value={args.Value}
                    onChange={(e) => onChange(e.target.value)}/>
            </Col>
        </FormGroup>)
}

export default TextInput
