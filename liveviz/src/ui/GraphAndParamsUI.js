import React from 'react'
import { Grid, Col } from 'react-bootstrap'
import TitleBarUI from './TitleBarUI'
import GraphSectionUI from './GraphSectionUI'
import Params from '../logic/Params'

import '../styles/params.css'
import '../styles/graph.css'

const GraphAndParamsUI = ({ url, status, displayParams, running, updateStatus, toggleRunning, toggleParams }) =>
<Grid fluid={true} id="graph-params" className={"" + (displayParams? "paramsDisplayed" : "paramsHidden") }>
  <Col md={displayParams? 10 : 12}>
    <div id="page-content-wrapper" className="fullHeight">
      <TitleBarUI
        displayParams={displayParams}
        running={toggleRunning}
        toggleRunning={toggleRunning}
        toggleParams={toggleParams}
        />
      <GraphSectionUI
        url={url}
        running={running}
        status={status}
        updateStatus={updateStatus}
        />
    </div>
  </Col>
  { displayParams?
    <Col md={2}>
      <div id="sidebar-wrapper" className="fullHeight">
        <Params url={url} status={status} running={running}/>
      </div>
    </Col> : null
  }
</Grid>

export default GraphAndParamsUI;
