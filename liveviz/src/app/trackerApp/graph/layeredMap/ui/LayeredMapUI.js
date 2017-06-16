import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import LayerSelectorUI from './LayerSelectorUI'
import SliceSelectorUI from './SliceSelectorUI'

import '../styles/LayeredMap.css';
import 'styles/layeredMap.css'

import HeatMap from 'components/heatmap/HeatMap';
import Tracker from 'components/trackermap/Tracker';


const LayeredMapUI = ({setLayers, setSlice, layers, slice, availableLayers}) => {
  return (
    <div className="fullHeight">
      <Row className="layered-graph">
        <Col xs={12}  className="fullHeight graph-col pr-0 pl-0">
          <div className="layered-map fullHeight">
            {
              layers.raw ? <HeatMap/> : null
            }
            {
              layers.tracker ? <Tracker/> : null
            }
            <div className="layeredMap__toolbar">
              <div className="layeredMap_btnBlock">
                  <Button className="layeredMap_projectionIcons" bsStyle="primary"
                      onClick={ () => setSlice(slice == "XY" ? "XZ" : "XY")} >
                    <div className={"layeredMap__btnImg layeredMap_projection" + slice}/>
                  </Button>
              </div>
              <LayerSelectorUI
                  setLayers={setLayers}
                  layers={layers}
                  availableLayers={availableLayers}/>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default LayeredMapUI
