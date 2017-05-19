import React from 'react'
import PropTypes from 'prop-types'
import GraphAndParams from '../logic/GraphAndParams'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../styles/App.css'
import { Navbar} from 'react-bootstrap'

const AppUI = ({url, status, graphKey, onConnect, updateStatus}) =>
(
  <div>
    <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Vayyar Live Visualization </a>
          </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
    {/* This should move to a screen with a connection widget
      <ConnectionUI
      url={ url }
      onConnect={ onConnect }/> */}
    <GraphAndParams
      key={ graphKey  /* use key in order to force re-mounting each time we re-connect */ }
      url={ url }
      status={ status }
      updateStatus={ updateStatus }/>
  </div>
)

AppUI.propTypes = {
  url: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  graphKey: PropTypes.number.isRequired,
}

export default AppUI
