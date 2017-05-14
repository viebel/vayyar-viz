import React from 'react';
import {Button, Form, ButtonToolbar} from 'react-bootstrap';
import Boolean from '../controls/Boolean';
import Slider from '../controls/Slider';
import FetchPeriodic from '../common/FetchPeriodic';
import {map, keys } from 'ramda';

const DefaultControl = (props) =>
<div> Unsupported Param: {props.type} <br/>
{JSON.stringify(props)}
</div>

const Param = (props) => {
  const typeToComponent = (type) =>
  {
    const m = {
      Boolean: Boolean,
      Slider: Slider,
      Checkbox: Boolean,
    };
    return m[type] || DefaultControl;
  }
  const Component = typeToComponent(props.type);
  return <Component {...props}/>;
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

const ParamsUI = ({params, paramsByCategory, updateParam, resetParams, sendParams, status, error, url}) =>
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
      onClick={ resetParams }
      bsStyle="primary">
      Reset Params
    </Button>
    <Button
      onClick={ sendParams }
      bsStyle="primary">
      Update Params
    </Button>
  </ButtonToolbar>
</div>

const ParamsFetchUI = ({status, url, urlGetParams, preventFetch, interval, onSuccess, onError, paramsByCategory, updateParam, resetParams, sendParams, error}) =>
<div>
  {status === "disconnected"? null :
    <FetchPeriodic
      url={ urlGetParams }
      interval={ interval }
      prevent={ preventFetch}
      onSuccess={ onSuccess}
      onError={ onError }
      />
  }
  <ParamsUI
    error={ error }
    url={ url }
    paramsByCategory={ paramsByCategory }
    updateParam={ updateParam }
    resetParams={ resetParams }
    sendParams={ sendParams }
    />
</div>



export default ParamsFetchUI;
