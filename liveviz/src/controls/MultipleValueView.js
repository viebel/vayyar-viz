import React from 'react';
import { ControlLabel, Row, Col} from 'react-bootstrap';

const MultipleValueView = ({args}) =>
    <Row>
        <Col componentClass={ControlLabel} sm={6} xs={6}>
            {args.Description}
        </Col>
        <Col componentClass={ControlLabel} sm={6} xs={6}>
            {args.Value.map(item =>
                <span key={item.value}>{item + ", "}</span>
            )}
        </Col>
    </Row>

export default MultipleValueView
