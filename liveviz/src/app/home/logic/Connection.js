import { connect } from 'react-redux'
import ConnectionUI from '../ui/ConnectionUI'
import { setServerRoot, setConnectionStatus } from '../../../actions/GlobalActions'
import {withRouter} from 'react-router-dom';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onConnect(url)  {
            dispatch(setServerRoot(url))
            dispatch(setConnectionStatus("connecting"))

            ownProps.history.push('./trackerApp');
        },
  }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        url: state.global.serverRoot,
        status: state.global.connectionStatus,
     }
}


const Connection = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectionUI))

export default Connection
