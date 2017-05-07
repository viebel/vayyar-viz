import React, {Component} from 'react';
import {Button, Form, ButtonToolbar} from 'react-bootstrap';
import Boolean from '../controls/Boolean';
import Slider from '../controls/Slider';

import {map, keys} from 'ramda';


function DefaultControl(props) {
  return (
    <div> Unsupported Param: {props.type} <br/>
    {JSON.stringify(props)} </div>
);
}

class Param extends Component {
  typeToComponent(type) {
    const m = {
      Boolean: Boolean,
      Slider: Slider,
      Checkbox: Boolean,
    };
    return m[type] || DefaultControl;
  }
  render(){
    const Component = this.typeToComponent(this.props.type);
    return <Component {...this.props}/>;
  }
}

const ParamsList = ({params, updateParam}) =>
<Form horizontal>
  {
    params.map (param =>
      <Param
        onChange={(val) => updateParam(param.ActualName, val)}
        key={param.ActualName}
        args={param}
        type={param.VariableType}>
      </Param>
    )
  }
</Form>


const ParamsGroup = ({group, updateParam, params}) =>
<div key={group}>
  <h2> {group} </h2>
  <ParamsList
    updateParam={updateParam}
    params={params}>
  </ParamsList>
</div>

const ParamsUI = ({paramsByCategory, updateParam, resetParams, sendParams, status, error}) =>
<div>
  <h1> Parameters</h1>
  <div> status: {status}</div>
  <div> {error}</div>
  {
    map( group =>
      <ParamsGroup
        key={group}
        updateParam={updateParam}
        group={group}
        params={paramsByCategory[group]}/>
    )(keys(paramsByCategory))
  }
  <ButtonToolbar>
    <Button
      onClick={resetParams}
      bsStyle="primary">
      Reset Params
    </Button>
    <Button
      onClick={sendParams}
      bsStyle="primary">
      Update Params
    </Button>
  </ButtonToolbar>
</div>

export default ParamsUI;
