import React from 'react';
import {FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

const MinMaxSlider = ({args, onChange}) => {
    function onChangeVal(e) {
        onChange(e.target.value)
        // TODO: 2017, May 25 - Yehonahtan find a way to prevent out of bound values
        // TODO: 2017, May 27 - Check than min <= max
    }

    return(
        <FormGroup>
            <Col componentClass={ControlLabel} xs={12}>
                {args.Description}
            </Col>
            <Col xs={5}>
                <FormControl
                    type="number"
                    min={args.Min}
                    max={args.Max}
                    value={args.Value[0]}
                    onChange={onChangeVal}/>
            </Col>
            <Col xs={2}></Col>
            <Col xs={5}>
                <FormControl
                    type="number"
                    min={args.Min}
                    max={args.Max}
                    value={args.Value[1]}
                    onChange={onChangeVal}/>
            </Col>
            <Col xs={12}></Col>
            <Col xs={12}>
                <ReactBootstrapSlider
                    value={args.Value}
                    min={args.Min}
                    max={args.Max}
                    tooltip="hide"
                    change={onChangeVal}/>
            </Col>
        </FormGroup>)
}

export default MinMaxSlider
