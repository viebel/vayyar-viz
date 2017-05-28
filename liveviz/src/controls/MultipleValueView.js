import React from 'react'
import { ControlLabel, Row, Col} from 'react-bootstrap'
import '../styles/params.css'

const MultipleValueView = ({args}) =>
    <Row>
        <Col componentClass={ControlLabel} sm={6} xs={6}>
            {args.Description}
        </Col>
        <Col componentClass={ControlLabel} sm={6} xs={6}>
          <div className="multiple-values">
            {args.Value.map(item =>
                <span className="value"
                      key={item}>
                      {item}
                </span>
            )}
          </div>
        </Col>
    </Row>

export default MultipleValueView
