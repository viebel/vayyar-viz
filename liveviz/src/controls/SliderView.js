/**
 * Created by eliebuff on 18/05/2017.
 */
import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, Row, Col} from 'react-bootstrap';



class SliderView extends Component{

    render() {
        return (
        <Row >
            <Col componentClass={ControlLabel} sm={6} xs={6}>
                {this.props.args.Description}
            </Col>
            <Col componentClass={ControlLabel} sm={6} xs={6}>
                {this.props.args.Value}
            </Col>
        </Row>
        );
    }
}

export default SliderView;
