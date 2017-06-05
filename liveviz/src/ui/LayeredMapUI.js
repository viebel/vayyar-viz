import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Graph from '../ui/GraphUI'
import LayerSelectorUI from '../ui/LayerSelectorUI'
import SliceSelectorUI from '../ui/SliceSelectorUI'

import '../styles/layeredMap.css'


const LayeredMapUI = ({setLayers, setSlice, layers, slice, availableLayers, availableSlices, url, running, updateStatus}) => {
  return (
    <div className="fullHeight">
      <SliceSelectorUI
        setSlice={setSlice}
        slice={slice}
        availableSlices={availableSlices}/>
      <Row className="fullHeight">
        <Col xs={2}>
          <LayerSelectorUI
            setLayers={setLayers}
            layers={layers}
            availableLayers={availableLayers}/>
        </Col>
        <Col xs={10} className="layered-map fullHeight">
            {
              layers.raw?
              <Graph
                url={url}
                running={running}
                type="HeatMap"
                updateStatus={updateStatus}
                status={status}/>
              : null
            }
            {
              layers.tracker?
              <Graph
                url={url}
                running={running}
                type="Tracker"
                updateStatus={updateStatus}
                status={status}/>
              : null
            }
        </Col>
      </Row>
    </div>
  )
}

export default LayeredMapUI
