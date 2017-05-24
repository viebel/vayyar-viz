/**
 * Created by eliebuff on 23/05/2017.
 */
import React from 'react'
import {FormGroup, ControlLabel, Col} from 'react-bootstrap'
import Switch from 'react-bootstrap-switch';
import 'react-bootstrap-switch/dist/css/bootstrap2/react-bootstrap-switch.min.css';
import {truthy} from './utils'

const SwitchComponent = ({args, onChange}) =>
    <FormGroup>
        <Col componentClass={ControlLabel} xs={12}>
            {args.Description + ' '}
        </Col>

        <Switch
            value={truthy(args.Value)}
            onChange={(e, state) => onChange(state)}
            name={args.ActualName}/>
    </FormGroup>


export default SwitchComponent
