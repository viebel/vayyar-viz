import React from 'react';
import { ControlLabel, Row, Col} from 'react-bootstrap';

const SliderView = ({args}) =>
<Row >
  <Col componentClass={ControlLabel} sm={6} xs={6}>
    {this.props.args.Description}
  </Col>
  <Col componentClass={ControlLabel} sm={6} xs={6}>
    {this.props.args.Value}
  </Col>
</Row>

export default SliderView
