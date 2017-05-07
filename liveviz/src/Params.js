import React, {Component} from 'react';
import {Button, Form, ButtonToolbar} from 'react-bootstrap';
import Boolean from './controls/Boolean';
import Slider from './controls/Slider';
import {debounce} from 'throttle-debounce';
import {merge, assoc, map, findIndex, propEq, adjust, groupBy, split, head, keys} from 'ramda';
import FetchPeriodic from './common/FetchPeriodic';
const paramsRequestId = 'UpdateConfigurationEditor';
const paramsRequestTypeId = 'MatGUIInterfaces.UpdateConfigurationEditorDataBlock, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';


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

class Params extends Component {
  constructor(props){
    super(props);
    this.state = {
      params: [],
    };
    this.updateParam = this.updateParam.bind(this);
    this.sendParams = this.sendParams.bind(this);
    this.debouncedSendParams = debounce(300, this.sendParams);
    this.resetParams = this.resetParams.bind(this);
  }
  resetParams() {
    let params = map(p => assoc('Value', p.DefaultValue, p))(this.state.params);
    this.setState(assoc('params', params, this.state));
    this.sendParams();
  }
  sendParams() {
    this.setState(assoc('preventGetValues', true, this.state));
    const params = this.state.params.map(p => {
      return {
        ActualName: p.ActualName,
        Value: p.Value
      };
    });

    const d = {
      variables : params,
      ID : paramsRequestId,
      __jTypeID : paramsRequestTypeId,
    };

    fetch(`${this.props.url}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(d)
    }).then(response => {
      this.setState(assoc('preventGetValues', false, this.state));
    });
  }
  updateParam(name, value) {
    const idx = findIndex(propEq('ActualName', name), this.state.params);
    const params = adjust(assoc('Value',value), idx)(this.state.params);
    this.setState(merge(this.state, {params, preventGetValues: true}));
    this.debouncedSendParams();
  }
  paramsByCategory() {
    return groupBy(p => head(split('.', p.VisibleName)))(this.state.params);
  }

  render() {
    return (
      <div>
        {this.props.status === "disconnected"? null :
          <FetchPeriodic
            url={`${this.props.url}/${paramsRequestId}`}
            interval={1000}
            prevent={this.state.preventGetValues}
            onSuccess={params => this.setState(assoc('params', params.variables, this.state))}
            onError={(reason, url) =>  this.setState(assoc('error', `Cannot connect to server at ${url}`, this.state))}
            />
        }
        <ParamsUI
          {...this.props}
          error={this.state.error}
          paramsByCategory={this.paramsByCategory()}
          updateParam={this.updateParam}
          resetParams={this.resetParams}
          sendParams={this.sendParams}
          />
      </div>
    );
  }
}

export default Params;
