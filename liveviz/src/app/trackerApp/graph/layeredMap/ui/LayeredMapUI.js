import React from 'react'
import { Col, Row } from 'react-bootstrap'
import LayerSelectorUI from './LayerSelectorUI'
import 'styles/layeredMap.css'

import HeatMap from 'components/heatmap/HeatMap';
import Tracker from 'components/trackermap/Tracker';


const LayeredMapUI = ({setLayers, layers, slice, availableLayers}) => {
  return (
    <div className="fullHeight">
      <div>slice: {slice} </div>
      <Row className="fullHeight">
        <Col xs={2}>
          <LayerSelectorUI
            setLayers={setLayers}
            layers={layers}
            availableLayers={availableLayers}/>
        </Col>
        <Col xs={10} className="layered-map fullHeight">
            {
              layers.raw ? <HeatMap/> : null
            }
            {
              layers.tracker ? <Tracker/> : null
            }
        </Col>
      </Row>
    </div>
  )
}

export default LayeredMapUI
