import React from 'react';
import Connection from '../Connection';
import GraphAndParams from '../GraphAndParams';
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import '../styles/App.css';
import { Grid, Navbar} from 'react-bootstrap';


const AppUI = ({url, status, graphKey, onConnect, updateStatus}) =>
(
  <div>
    <Navbar inverse fixedTop>
      <Grid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Vayyar Live Visualization </a>
          </Navbar.Brand>
        </Navbar.Header>
      </Grid>
    </Navbar>
    <Connection
      url={ url }
      onConnect={ onConnect }></Connection>
    <GraphAndParams
      key={ graphKey } /* use key in order to force re-mounting each time we re-connect */
      url={ url }
      status={ status }
      updateStatus={ updateStatus }/>
  </div>
)

export default AppUI
