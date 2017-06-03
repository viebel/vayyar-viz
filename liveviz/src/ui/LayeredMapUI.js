import React from 'react'
import Graph from '../ui/GraphUI'
import '../styles/layeredMap.css'


const LayeredMapUI = ({layers, slice, url, running, updateStatus}) => {
  return (
    <div>
      <div>slice: {slice} </div>
      <div className="layered-map">
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
      </div>
    </div>
  )
}

export default LayeredMapUI
