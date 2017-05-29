import React from 'react'
import {FormGroup, ControlLabel, Col, Checkbox} from 'react-bootstrap'
import {append, without, contains } from 'ramda'

const CheckboxItem = ({args, onChange}) => {
    const isDisabledValue = (currentVal) =>{
        return contains(currentVal, args.Value)
    }

    const onChangeCheckboxVal = (e, item) => {
        if(e.target.checked) {
            args.Value = append(item, args.Value);
        }
        else{
            args.Value = without([item], args.Value);
        }
        onChange(args.Value)
    }
    return (
         <FormGroup >
            <Col componentClass={ControlLabel} xs={12}>
                {args.Description}
            </Col>
            <Col xs={12}>
            {args.ListValues.map(item =>
                <Checkbox
                    checked={isDisabledValue(item)}
                    onChange={(e) => onChangeCheckboxVal(e, item)}
                    key={item}
                    inline
                >
                    {item}
                </Checkbox>
            )}
            </Col>
         </FormGroup>
    )
}

export default CheckboxItem
