import React from 'react'
import {FormGroup, ControlLabel, Radio, Col} from 'react-bootstrap'
import {truthy} from './utils'

const Boolean = ({args, onChange}) =>
<FormGroup className="col-xs-12">
  <ControlLabel>
    {args.Description + ' '}
  </ControlLabel>
  <Radio
    checked={truthy(args.Value)}
    name={args.ActualName}
    onChange={(e) => onChange(true)}>
    true
  </Radio>
  <Radio
    checked={!truthy(args.Value)}
    name={args.ActualName}
    onChange={(e) => onChange(false)}>
    false
  </Radio>
</FormGroup>

export default Boolean
