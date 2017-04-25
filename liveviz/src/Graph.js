import React from 'react';
import HeatMap from './HeatMap';

function Graph  ({url, status, updateStatus}) {
  let heatmap;
  if (status !== "disconnected") {
    heatmap = <HeatMap
      status={status}
      updateStatus={updateStatus}
      url={url}/>;
  } else {
    heatmap = <div>Not connected</div>;
    }
    return (
      <div>
        <h1> Heat Map </h1>
        { heatmap }
      </div>
    );
  }

  export default Graph;
