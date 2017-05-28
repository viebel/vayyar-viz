import React from 'react';
import { ControlLabel, Row, Col} from 'react-bootstrap';

const MinMaxSliderView = ({args}) =>
    <Row>
        <Col componentClass={ControlLabel} sm={6} xs={6}>
            {args.Description}
        </Col>
        <Col componentClass={ControlLabel} sm={3} xs={3}>
            {args.Value[0]}
        </Col>
        <Col componentClass={ControlLabel} sm={3} xs={3}>
            {args.Value[1]}
        </Col>
    </Row>

export default MinMaxSliderView
