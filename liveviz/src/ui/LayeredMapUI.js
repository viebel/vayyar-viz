import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Graph from '../ui/GraphUI'
import LayerSelectorUI from '../ui/LayerSelectorUI'
import '../styles/layeredMap.css'


const LayeredMapUI = ({setLayers, layers, slice, availableLayers, url, running, updateStatus}) => {
  return (
    <div className="fullHeight">
      <div>slice: {slice} </div>
      <Row className="fullHeight">
        <Col xs={2}>
          <LayerSelectorUI
            setLayers={setLayers}
            layers={Object.keys(layers)}
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
