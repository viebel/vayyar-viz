import React from 'react'
import LayerMapToolbarUI from './LayerMapToolbarUI'
import RulerUI from './RulerUI'


import '../styles/LayeredMap.css';
import 'styles/layeredMap.css'

import ThreeD from 'components/3d/ThreeD';
import HeatMap from 'components/heatmap/HeatMap';
import Tracker from 'components/trackermap/logic/Tracker';
import TrackerInit from 'components/trackermap/logic/TrackerInit';


const LayeredMapUI = ({setLayers, setSlice, layers, slice, availableLayers, maxHorizontalValue, maxVerticalValue}) =>
<div className="layered-map">
<LayerMapToolbarUI
  layers={layers}
  slice={slice}
  setLayers={setLayers}
  setSlice={setSlice}
  availableLayers={availableLayers}
  />
  <div className="layeredMap__drawingSection">
    <RulerUI maxVerticalValue={maxVerticalValue*10} maxHorizontalValue={maxHorizontalValue*10}/>
    <div className="layeredMap__graph">
      {
        layers.heatmap && !layers.threeD && // Prevent 3D from overlapping with other layers
        <HeatMap/>
      }
      {
        (!layers.threeD) && (layers.target || layers.position || layers.raw || layers.height) &&
        <Tracker
          showPosture={layers.position}
          showZLayer={layers.raw}
          showShadow={layers.height}
          />
      }
    {
      (!layers.threeD) && (layers.target || layers.position || layers.raw || layers.height) &&
      <TrackerInit/>
    }
      {
        layers.threeD &&
            <ThreeD/>
      }
    </div>
  </div>
</div>

export default LayeredMapUI
