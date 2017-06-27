import { connect } from 'react-redux'
import ConnectionUI from './ConnectionUI'
import { setServerRoot, setConnectionStatus } from '../actions/GlobalActions'

const mapDispatchToProps = (dispatch) => ({
    onConnect(url)  {
      dispatch(setServerRoot(url))
      dispatch(setConnectionStatus("connecting"))
    },
  })

const mapStateToProps = (state) => ({
    url: state.global.serverRoot,
  })

const Connection = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectionUI)

export default Connection
