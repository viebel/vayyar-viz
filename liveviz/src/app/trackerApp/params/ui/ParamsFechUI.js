import React from 'react'
import FetchPeriodic from 'common/FetchPeriodic'
import ParamsUI from './ParamsUI';


const ParamsFetchUI = ({status, urlGetParams, isEditable, preventFetch, interval, onSuccess, onError, paramsByCategory, updateParam, resetParams, changeParamsStatus, sendParams, error}) =>
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
      isEditable={isEditable}
      paramsByCategory={ paramsByCategory }
      updateParam={ updateParam }
      changeParamsStatus={ changeParamsStatus }
      resetParams={ resetParams }
      sendParams={ sendParams }
      />
  </div>

export default ParamsFetchUI;
