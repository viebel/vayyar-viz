import React, {Component} from 'react';
import {Button, Form, ButtonToolbar} from 'react-bootstrap';
import Boolean from './controls/Boolean';
import Slider from './controls/Slider';
import {assoc, map, findIndex, propEq, adjust} from 'ramda';


const params = {
  "variables":[
    {
      "VisibleName":"Arena.X_Min",
      "ActualName":"x.amin",
      "VariableType":"Slider",
      "Value":3.0,
      "Description":"Arena X min",
      "Min":1.0,
      "Max":100.0,
      "DefaultValue":3.0
    },
    {
      "VisibleName":"Arena.X_Max",
      "ActualName":"x.amax",
      "VariableType":"Slider",
      "Value":10.0,
      "Description":"Arena X max",
      "Min":1.0,
      "Max":100.0,
      "DefaultValue":10.0
    },
    {
      "VisibleName":"Arena.Y_Min",
      "ActualName":"x.bmin",
      "VariableType":"Slider",
      "Value":4.0,
      "Description":"Arena Y min",
      "Min":1.0,
      "Max":100.0,
      "DefaultValue":4.0
    },
    {
      "VisibleName":"Arena.Y_Max",
      "ActualName":"x.bmax",
      "VariableType":"Slider",
      "Value":8.0,
      "Description":"Arena Y max",
      "Min":1.0,
      "Max":100.0,
      "DefaultValue":8.0
    },
    {
      "VisibleName":"Arena.Z_Min",
      "ActualName":"x.cmin",
      "VariableType":"Slider",
      "Value":5.0,
      "Description":"Arena Z min",
      "Min":1.0,
      "Max":100.0,
      "DefaultValue":5.0
    },
    {
      "VisibleName":"Arena.Z_Max",
      "ActualName":"x.cmax",
      "VariableType":"Slider",
      "Value":50.0,
      "Description":"Arena Z max",
      "Min":1.0,
      "Max":100.0,
      "DefaultValue":50.0
    },
    {
      "VisibleName":"BG Removal.MTI",
      "ActualName":"x.boolv",
      "VariableType":"Boolean",
      "Value":true,
      "Description":"Background Removal",
      "DefaultValue":true
    },
  ],
};

function DefaultControl(props) {
  return (
    <div> {JSON.stringify(props)} </div>
  );
}

class Param extends Component {
  typeToComponent(type) {
    const m = {Boolean: Boolean,
      Slider: Slider,
    };
    return m[type] || DefaultControl;
  }
  render(){
    let component = this.typeToComponent(this.props.type);
    let props = {args: this.props.args,
      onChange: this.props.onChange};
      return React.createElement(component, props);
    };
  }

  class ParamsList extends Component {
    render(){
      return (
        <Form horizontal>
          {
            this.props.params.map (param =>
              <Param
                onChange={(val) => this.props.updateParam(param.ActualName, val)}
                key={param.ActualName}
                args={param}
                type={param.VariableType}>
              </Param>
            )
          }
        </Form>
      );
    }

  }

  class Params extends Component {
    constructor(props){
      super(props);
      this.state = {
        params: params.variables,
      };
      this.updateParam = this.updateParam.bind(this);
      this.sendParams = this.sendParams.bind(this);
      this.resetParams = this.resetParams.bind(this);
    }
    resetParams() {
      let params = map(p => assoc('Value', p.DefaultValue, p))(this.state.params);
      this.setState(assoc('params', params, this.state));
      this.sendParams();
    }
    sendParams() {
      let p = this.state.params.map(p => {
        return {
          ActualName: p.ActualName,
          Value: p.Value
        };
      }
    );
    console.log('sendParams: ' + JSON.stringify(p));
  }
  updateParam(name, value) {
    const idx = findIndex(propEq('ActualName', name), this.state.params);
    const params = adjust(assoc('Value',value), idx)(this.state.params);
    this.setState(assoc('params', params, this.state));
  }
  render() {
    return (
      <div>
        <h1> Parameters</h1>
        <ParamsList
          updateParam={this.updateParam}
          params={this.state.params}>
        </ParamsList>
        <ButtonToolbar>
          <Button
            onClick={this.resetParams}
            bsStyle="primary">
            Reset Params
          </Button>
          <Button
            onClick={this.sendParams}
            bsStyle="primary">
            Update Params
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Params;
