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
function Graph  ({url, status, updateStatus, title, type}) {
  const typeToGraph = {
    HeatMap,
    Tracker,
  };
  let Component = typeToGraph[type] || DefaultGraph;
  return (
    <div>
      <h1> { title } </h1>
      <div>
        <div>status: {status}</div>
        <Component
          type={type}
          status={status}
          updateStatus={updateStatus}
          url={url}/>
      </div>
    </div>
  );
}

export default Graph;
