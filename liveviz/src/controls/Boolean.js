import React, {Component} from 'react';
import {FormGroup, FormControl, ControlLabel, Radio, Col} from 'react-bootstrap';


class Boolean extends Component{

  render() {
    return (
      <FormGroup>
        <Col componentClass={ControlLabel} sm={6} xs={6}>
          {this.props.args.Description + ' '}
        </Col>
        <Radio inline
          checked={this.props.args.Value === true}
          name={this.props.args.ActualName}
          onChange={(e) => this.props.onChange(true)}>
          true
        </Radio>
        <Radio inline
          checked={this.props.args.Value === false}
          name={this.props.args.ActualName}
          onChange={(e) => this.props.onChange(false)}>
          false
        </Radio>
      </FormGroup>
    );
  }
}

export default Boolean;
