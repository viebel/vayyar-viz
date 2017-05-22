import React from 'react';
import {FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';

const Slider = ({args, onChange}) =>
<FormGroup >
  <Col componentClass={ControlLabel} xs={12}>
    {args.Description}
  </Col>
  <Col xs={12}>
    <FormControl
      type="number"
      min={args.Min}
      max={args.Max}
      value={args.Value}
      onChange={(e) => onChange(e.target.value)}/>
  </Col>
  <Col xs={12}></Col>
  <Col xs={12}>
    <ReactBootstrapSlider
      value={args.Value}
      min={args.Min}
      max={args.Max}
      tooltip="hide"
      change={(e) => onChange(e.target.value)}
      />
  </Col>
</FormGroup>

export default Slider
