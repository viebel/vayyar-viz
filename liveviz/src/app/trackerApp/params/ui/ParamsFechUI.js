import React from 'react'
import FetchInit from 'common/FetchInit'
import ParamsUI from './ParamsUI';


const ParamsFetchUI = ({status, isRunning, urlGetParams, urlPost, isEditable, interval, onSuccess, onError, paramsByCategory, updateParam, resetParams, changeParamsStatus, sendParams, paramsInit, error}) =>
  <div>
    {status === "disconnected"? null :
      <FetchInit
        isRunning={ isRunning }
        paramsInit={ paramsInit }
        urlGet={ urlGetParams }
        urlPost={ urlPost }
        interval={ interval }
        onSuccess={ onSuccess}
        onError={ onError }
        />
    }
    <ParamsUI
      isRunning={ isRunning }
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
