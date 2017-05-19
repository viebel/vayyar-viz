import React from 'react';
import {Button, Form, ButtonToolbar} from 'react-bootstrap';
import Boolean from '../controls/Boolean';
import Slider from '../controls/Slider';
import BooleanView from '../controls/BooleanView';
import SliderView from '../controls/SliderView';
import FetchPeriodic from '../common/FetchPeriodic';
import {map, keys } from 'ramda';
import '../styles/params.css';

const DefaultControl = (props) =>
<div> Unsupported Param: {props.type} <br/>
{JSON.stringify(props)}
</div>

const Param = (props) => {
  const typeToComponent = (type, isEditable) =>
  {
    const editableComponent = {
      Boolean: Boolean,
      Slider: Slider,
      Checkbox: Boolean,
    };
     const viewComponent = {
       Boolean: BooleanView,
       Slider: SliderView,
       Checkbox: BooleanView,
     };
    return (isEditable? editableComponent[type] : viewComponent[type]) || DefaultControl;
  }
  const Component = typeToComponent(props.type, props.isEditable);
  return <Component {...props}/>;
}

const ParamsList= ({params, updateParam, isEditable}) =>
<Form horizontal>
  {
    params.map (param =>
      <Param
        onChange={(val) => updateParam(param.ActualName, val)}
        key={param.ActualName}
        args={param}
        type={param.VariableType}
        isEditable={isEditable}>
      </Param>
    )
  }
</Form>


const ParamsGroup = ({group, updateParam, params, isEditable}) =>
<div key={group}>
  <h4> {group} </h4>
  <ParamsList
    updateParam={updateParam}
    params={params}
    isEditable={isEditable}>
  </ParamsList>
</div>

const ParamsUI = ({params, paramsByCategory, updateParam, resetParams, sendParams, status, error, url, isEditable, changeParamsStatus}) =>
<div>
  <Button
      className={keys(paramsByCategory).length > 0 ? "" : "hidden" }
      onClick={ changeParamsStatus }
      bsStyle="primary">
      {isEditable ? "View Mode" : "Edit Mode"}
  </Button>
  <div> {error}</div>
  {
    map( group =>
      <ParamsGroup
        key={group}
        updateParam={updateParam}
        group={group}
        params={paramsByCategory[group]}
        isEditable={isEditable}/>
    )(keys(paramsByCategory))
  }
  <ButtonToolbar className={isEditable ? "" : "hidden" }>
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

const ParamsFetchUI = ({status, url, urlGetParams, isEditable, preventFetch, interval, onSuccess, onError, paramsByCategory, updateParam, resetParams, changeParamsStatus, sendParams, error}) =>
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
    isEditable={isEditable}
    paramsByCategory={ paramsByCategory }
    updateParam={ updateParam }
    changeParamsStatus={ changeParamsStatus }
    resetParams={ resetParams }
    sendParams={ sendParams }
    />
</div>



export default ParamsFetchUI;
