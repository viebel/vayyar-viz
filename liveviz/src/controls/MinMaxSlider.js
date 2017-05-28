import React from 'react'
import {FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap'
import ReactBootstrapSlider from 'react-bootstrap-slider'
import { defaultStep } from './utils'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'

const MinMaxSlider = ({args, onChange}) => {
    const onChangeValSlider = (e) => {
        onChange(e.target.value)
        // TODO: 2017, May 25 - Yehonathan - find a way to prevent out of bound values
        // TODO: 2017, May 27 - Elie - Check than min <= max
    }
    const onChangeValMin = (e) => {
      onChange([e.target.value*1, args.Value[1]])
    }
    const onChangeValMax = (e) => {
      onChange([args.Value[0], e.target.value*1])
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
                    step={defaultStep(args)}
                    value={args.Value[0]}
                    onChange={onChangeValMin}/>
            </Col>
            <Col xs={2}></Col>
            <Col xs={5}>
                <FormControl
                    type="number"
                    min={args.Min}
                    max={args.Max}
                    step={defaultStep(args)}
                    value={args.Value[1]}
                    onChange={onChangeValMax}/>
            </Col>
            <Col xs={12}></Col>
            <Col xs={12}>
                <ReactBootstrapSlider
                    value={args.Value}
                    step={defaultStep(args)}
                    min={args.Min}
                    max={args.Max}
                    tooltip="hide"
                    change={onChangeValSlider}/>
            </Col>
        </FormGroup>)
}

export default MinMaxSlider
