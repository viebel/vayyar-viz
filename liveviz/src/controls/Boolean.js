import React from 'react';
import {FormGroup, ControlLabel, Radio, Col} from 'react-bootstrap';


function Boolean ({args, onChange}){
  function truthy () {
    return (args.Value === true || args.Value === 1);
  }
  return (
    <FormGroup>
      <Col componentClass={ControlLabel} xs={12}>
        {args.Description + ' '}
      </Col>
      <Radio
        checked={truthy()}
          name={args.ActualName}
          onChange={(e) => onChange(true)}>
          true
        </Radio>
        <Radio
          checked={!truthy()}
          name={args.ActualName}
          onChange={(e) => onChange(false)}>
          false
        </Radio>
      </FormGroup>
    );
  }

  export default Boolean;
