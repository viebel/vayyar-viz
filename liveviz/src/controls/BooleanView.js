import React from 'react';
import {ControlLabel, Row, Col} from 'react-bootstrap';
import {truthy} from './utils'

const Boolean = ({ args }) =>
<Row>
  <Col componentClass={ControlLabel} sm={6} xs={6}>
    {args.Description + ' '}
  </Col>
  <Col componentClass={ControlLabel} sm={6} xs={6}>
    {truthy (args.Value) ? "true" : "false"}
  </Col>
</Row>

export default Boolean
