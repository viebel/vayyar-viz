import React from 'react';
import {FormGroup, FormControl, Col} from 'react-bootstrap';

const Dropdown = ({args, onChange}) => {
    return(
        <FormGroup>
            <Col xs={12}>
                <FormControl
                    value={args.Value}
                    onChange={(e) => onChange(e.target.value)}
                    componentClass="select"
                    placeholder="select">
                    {args.ListValues.map(item =>
                        <option value={item.value}>{item.label}</option>
                    )}
                </FormControl>
            </Col>

        </FormGroup>)
}

export default Dropdown