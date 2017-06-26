import React from 'react'
import LayerMapToolbarUI from './LayerMapToolbarUI'
import RulerUI from './RulerUI'


import '../styles/LayeredMap.css';
import 'styles/layeredMap.css'

import HeatMap from 'components/heatmap/HeatMap';
import Tracker from 'components/trackermap/logic/Tracker';


const LayeredMapUI = ({setLayers, setSlice, layers, slice, availableLayers}) => {
  return (
    <div className="layered-map">
        <RulerUI maxVerticalValue={15} maxHorizontalValue={20}/>
        <div className="layeredMap__drawingSection">
            <LayerMapToolbarUI
                layers={layers}
                slice={slice}
                setLayers={setLayers}
                setSlice={setSlice}
                availableLayers={availableLayers}/>

            <div className="layeredMap__graph">
                {
                    layers.heatmap ? <HeatMap/> : null
                }
                {
                    layers.target || layers.position || layers.raw || layers.height ?
                        <Tracker showPosition={layers.position} showZLayer={layers.raw } showShadow={layers.height}/> :
                        null
                }
            </div>
        </div>
    </div>
  )
}

export default LayeredMapUI
