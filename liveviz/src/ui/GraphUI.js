import React from 'react';
import HeatMap from '../logic/HeatMap';
import Tracker from '../logic/Tracker';

const DefaultGraph = ({type}) =>
<div>
  Graph of type <strong>{type}</strong> is not supported.
</div>

const Graph  = (props) =>
{
  const typeToGraph = {
    HeatMap,
    Tracker,
  },
  {title, type} = props,
  Component = typeToGraph[type] || DefaultGraph;
  return (
    <div>
      <h1> { title } </h1>
      <div>
        <Component {...props}/>
      </div>
    </div>
  );
}

export default Graph;
