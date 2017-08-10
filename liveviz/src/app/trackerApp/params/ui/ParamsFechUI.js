import React from 'react'
import FetchInit from 'common/FetchInit'
import ParamsUI from './ParamsUI';


const ParamsFetchUI = ({status, phase, urlGetParams, urlPost, isEditable, interval, onSuccess, onError, paramsByCategory, updateParam, resetParams, changeParamsStatus, sendParams, paramsInit, error}) =>
  <div>
    {status === "disconnected" ? null :
      <FetchInit
        paramsInit={ paramsInit }
        urlGet={ urlGetParams }
        urlPost={ urlPost }
        interval={ interval }
        onSuccess={ onSuccess}
        onError={ onError }
        />
    }
    <ParamsUI
      phase={ phase }
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
