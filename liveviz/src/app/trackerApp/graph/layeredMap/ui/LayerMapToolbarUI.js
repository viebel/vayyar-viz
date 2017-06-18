import React from 'react'

import SliceSelectorUI from './SliceSelectorUI';
import LayerSelectorUI from './LayerSelectorUI';


const LayerMapToolbarUI = ({layers, slice, setLayers, setSlice, availableLayers}) =>
    <div className="layeredMapToolbar fullHeight">
        <SliceSelectorUI slice={slice} setSlice={setSlice}/>
        <LayerSelectorUI layers={layers} setLayers={setLayers} availableLayers={availableLayers}/>
    </div>
export default LayerMapToolbarUI
