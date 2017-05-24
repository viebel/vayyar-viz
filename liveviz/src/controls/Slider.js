import React from 'react';
import {FormGroup, FormControl, ControlLabel, Col, HelpBlock} from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

const Slider = ({args, onChange}) => {
    function onChangeVal(e) {
        let currValue = e.target.value
        let previousVal = args.Value

        if (args.Min <= currValue && currValue <= args.Max)
            onChange(e.target.value)
        else
            onChange(previousVal)
    }

    return(
        <FormGroup>
            <Col componentClass={ControlLabel} xs={12}>
                {args.Description}
            </Col>
            <Col xs={12}>
                <FormControl
                    type="number"
                    min={args.Min}
                    max={args.Max}
                    value={args.Value}
                    onChange={onChangeVal}/>
            </Col>
            <Col xs={12}></Col>
            <Col xs={12}>
                <ReactBootstrapSlider
                    value={args.Value}
                    min={args.Min}
                    max={args.Max}
                    tooltip="hide"
                    onChange={onChangeVal}/>
            </Col>
            <HelpBlock>Min: {args.Min} Max: {args.Max}.</HelpBlock>
         </FormGroup>)
}

export default Slider
