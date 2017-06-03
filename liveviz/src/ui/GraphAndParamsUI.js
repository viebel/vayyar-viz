import React from 'react'
import { Grid, Col } from 'react-bootstrap'
import TitleBarUI from './TitleBarUI'
import GraphSectionUI from './GraphSectionUI'
import Params from '../logic/Params'

import '../styles/params.css'
import '../styles/graph.css'

const GraphAndParamsUI = ({ multipleMapView, singleMapView, view, url, status, displayParams, running, updateStatus, setViewMode, toggleRunning, toggleParams }) =>
<Grid fluid={true} id="graph-params" className={"" + (displayParams? "paramsDisplayed" : "paramsHidden") }>
  <Col xs={displayParams? 10 : 12}>
    <div id="page-content-wrapper" className="fullHeight">
      <TitleBarUI
        setViewMode={setViewMode}
        displayParams={displayParams}
        running={toggleRunning}
        toggleRunning={toggleRunning}
        toggleParams={toggleParams}
        />
      <GraphSectionUI
        view={view}
        singleMapView={singleMapView}
        multipleMapView={multipleMapView}
        url={url}
        running={running}
        status={status}
        updateStatus={updateStatus}
        />
    </div>
  </Col>
    <Col xs={displayParams? 2 : 0}>
      <div id="sidebar-wrapper" className="fullHeight">
        { displayParams?
        <Params url={url} status={status} running={running}/> : null}
      </div>
    </Col>
</Grid>

export default GraphAndParamsUI;
