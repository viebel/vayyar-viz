import React from 'react';
import { ControlLabel, Row, Col} from 'react-bootstrap';

const SliderView = ({args}) =>
<Row >
  <Col componentClass={ControlLabel} sm={6} xs={6}>
    {args.Description}
  </Col>
  <Col componentClass={ControlLabel} sm={6} xs={6}>
    {args.Value}
  </Col>
</Row>

export default SliderView
