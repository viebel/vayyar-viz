import React from 'react'
import {FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap'
import ReactBootstrapSlider from 'react-bootstrap-slider'
import { defaultStep } from './utils'
import 'bootstrap-slider/dist/css/bootstrap-slider.css'

const Slider = ({args, onChange}) => {
  const onChangeVal = (e) => {
    onChange(e.target.value*1)
    // TODO: 2017, May 25 - Yehonahtan find a way to prevent out of bound values
  }

  return(
    <FormGroup>
      <Col componentClass={ControlLabel} xs={12}>
        {args.Description}
      </Col>
      <Col xs={12}>
        <FormControl
          type="number"
          step={defaultStep(args)}
          min={args.Min}
          max={args.Max}
          value={args.Value}
          onChange={onChangeVal}/>
      </Col>
      <Col xs={12}></Col>
      <Col xs={12}>
        <ReactBootstrapSlider
          value={args.Value}
          step={defaultStep(args)}
          min={args.Min}
          max={args.Max}
          tooltip="hide"
          change={onChangeVal}/>
      </Col>
    </FormGroup>)
  }

  export default Slider
