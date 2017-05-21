import React from 'react';
import {ControlLabel, Col} from 'react-bootstrap';
import {truthy} from './utils'

const Boolean = ({ args }) =>
<div>
  <Col componentClass={ControlLabel} sm={6} xs={6}>
    {args.Description + ' '}
  </Col>
  <Col componentClass={ControlLabel} sm={6} xs={6}>
    {truthy (args.Value) ? "true" : "false"}
  </Col>
</div>

export default Boolean
