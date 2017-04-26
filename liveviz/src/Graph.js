import React from 'react';
import HeatMap from './HeatMap';
import Tracker from './Tracker';


function DefaultGraph({type}) {
  return (
    <div>
      Graph of type <strong>{type}</strong> is not supported.
    </div>
  )
}
function Graph  (props) {
  const typeToGraph = {
    HeatMap,
    Tracker,
  },
  {status, title, type} = props,
  Component = typeToGraph[type] || DefaultGraph;
  return (
    <div>
      <h1> { title } </h1>
      <div>
        <div>status: {status}</div>
        <Component {...props}/>
      </div>
    </div>
  );
}

export default Graph;
