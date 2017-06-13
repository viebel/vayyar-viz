import React from 'react'
import { Grid, Col } from 'react-bootstrap'
import TitleBar from '../TitleBar'
import GraphSection from '../graph/GraphSection'
import Params from '../params/logic/Params'

import 'styles/params.css'
import 'styles/graph.css'

const TrackerAppUI = ({ multipleMapView, singleMapView, view, url, status, displayParams, running, updateStatus, setViewMode, toggleRunning, toggleParams }) =>
<Grid fluid={true} id="graph-params" className={"" + (displayParams? "paramsDisplayed" : "paramsHidden") }>
  <Col xs={displayParams? 10 : 12}>
    <div id="page-content-wrapper" className="fullHeight">
      <TitleBar/>
      <GraphSection/>
    </div>
  </Col>
    <Col xs={displayParams? 2 : 0}>
      <div id="sidebar-wrapper" className="fullHeight">
        { displayParams?
        <Params url={url} status={status} running={running}/> : null}
      </div>
    </Col>
</Grid>

export default TrackerAppUI;
