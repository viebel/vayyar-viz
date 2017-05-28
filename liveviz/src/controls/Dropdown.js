import React from 'react'
import {FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap'

const Dropdown = ({args, onChange}) =>
    <FormGroup >
        <Col componentClass={ControlLabel} xs={12}>
            {args.Description}
        </Col>
        <Col xs={12}>
            <FormControl
                componentClass="select"
                placeholder="select"
                value={args.Value}
                onChange={(e) => onChange(e.target.value)}>
                {args.ListValues.map(item =>
                    <option key={item.value} value={item.value}>{item.label}</option>
                )}
            </FormControl>
        </Col>
    </FormGroup>

export default Dropdown
