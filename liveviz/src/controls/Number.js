import React from 'react';
import {FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';

const Number = ({args, onChange}) =>
<FormGroup >
  <Col componentClass={ControlLabel} xs={12}>
    {args.Description}
  </Col>
  <Col xs={12}>
    <FormControl
      type="number"
      min={args.Min}
      max={args.Max}
      value={args.Value}
      onChange={(e) => onChange(e.target.value)}/>
  </Col>  
</FormGroup>

export default Number
