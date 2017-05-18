export const setServerRoot = (url) => {
  return {
    type: 'SET_SERVER_ROOT',
    val: url,
  }
}

export const setConnectionStatus = (status) => {
  return {
    type: 'SET_CONNECTION_STATUS',
    val: status,
  }
}

export const setParamsStatus = () => {
    return {
        type: 'SET_PARAMS_STATUS'
    }
}
