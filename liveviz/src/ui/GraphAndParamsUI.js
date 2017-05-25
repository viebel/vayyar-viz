import React from 'react'
import { Grid } from 'react-bootstrap'
import TitleBarUI from './TitleBarUI'
import GraphSectionUI from './GraphSectionUI'
import Params from '../logic/Params'

import '../styles/params.css'
import '../styles/graph.css'

const GraphAndParamsUI = ({ url, status, displayParams, running, updateStatus, toggleRunning, toggleParams }) =>
<Grid fluid={true} id="graph-params" className={"" + (displayParams? "paramsDisplayed" : "paramsHidden") }>
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
  { displayParams?
    <div id="sidebar-wrapper">
      <Params url={url} status={status} running={running}/>
    </div> : null
  }
</Grid>

export default GraphAndParamsUI;
