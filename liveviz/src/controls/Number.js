import React from 'react'
import {FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap'
import { defaultStep } from './utils'

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
      step={defaultStep(args)}
      onChange={(e) => onChange(e.target.value)}/>
  </Col>
</FormGroup>

export default Number
