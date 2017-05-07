import React from 'react';
import drawHeatMap from '../heatmap/heatmap';
import FetchPeriodic from '../common/FetchPeriodic';

const HeatMapUI =({updateStatus, status, onError, running, error, url}) => {
  let canvas = null;
  const draw = (data) => drawHeatMap(canvas, data.Data, {min: 0, max: 4000})

  return (
    <div>
      <div>{error}</div>
      <div>running:{running.toString()}</div>

      {status === "disconnected"? null :
        <div>
          <FetchPeriodic
            url={`${url}/demoData2`}
            onAnimationFrame={true}
            prevent={!running}
            onSuccess={data => {
              draw(data);
              updateStatus("connected");
            }}
            onError={onError}
            />
          <canvas
            width="600"
            height="400"
            ref={element => canvas = element}/>
        </div>
      }
    </div>
  );
}

export default HeatMapUI;
