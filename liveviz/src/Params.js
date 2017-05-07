import React, {Component} from 'react';
import {debounce} from 'throttle-debounce';
import {merge, assoc, map, findIndex, propEq, adjust, groupBy, split, head} from 'ramda';
import FetchPeriodic from './common/FetchPeriodic';
import ParamsUI from './ui/ParamsUI';

const paramsRequestId = 'UpdateConfigurationEditor';
const paramsRequestTypeId = 'MatGUIInterfaces.UpdateConfigurationEditorDataBlock, MatGUIInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null';

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
  dataForServer () {
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
    return d;
  }
  sendParams() {
    this.setState(assoc('preventGetValues', true, this.state));


    fetch(`${this.props.url}/post`, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(this.dataForServer())
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
