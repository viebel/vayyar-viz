import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import 'bootstrap-slider/dist/css/bootstrap-slider.css';


class Slider extends Component{

  render() {
    return (
      <FormGroup >
        <Col componentClass={ControlLabel} sm={6} xs={6}>
          {this.props.args.Description}
        </Col>
        <Col sm={6} xs={6}>
          <FormControl
            type="number"
            min={this.props.args.Min}
            max={this.props.args.Max}
            value={this.props.args.Value}
            onChange={(e) => this.props.onChange(e.target.value)}/>
        </Col>
        <Col sm={6} xs={6}></Col>
        <Col sm={6} xs={6}>
          <ReactBootstrapSlider
            value={this.props.args.Value}
            min={this.props.args.Min}
            max={this.props.args.Max}
            tooltip="hide"
            change={(e) => this.props.onChange(e.target.value)}
            />
        </Col>
      </FormGroup>
    );
  }
}

export default Slider;
