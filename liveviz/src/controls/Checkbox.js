import React from 'react'
import {FormGroup, ControlLabel, Col, Checkbox} from 'react-bootstrap'
import {append, without, contains } from 'ramda'

const CheckboxChoices = ({args, onChange}) => {
  const isCheckedValue = (currentVal) =>{
    return contains(currentVal, args.Value)
  }

  const updateValues = (values, value, checked) => {
    if(checked) {
      if(contains(value, values)) {
        return values
      }
      return append(value, values)
    }
    return without([value], values)
  }

  const onChangeCheckboxVal = (e, item) => {
    onChange(updateValues(args.Value, item, e.target.checked))
  }

  return (
    <FormGroup >
      <Col componentClass={ControlLabel} xs={12}>
        {args.Description}
      </Col>
      <Col xs={12}>
        {args.ListValues.map(item =>
          <Checkbox
            checked={isCheckedValue(item)}
            onChange={(e) => onChangeCheckboxVal(e, item)}
            key={item}
            inline>
            {item}
          </Checkbox>
        )}
      </Col>
    </FormGroup>
  )
}

export default CheckboxChoices
