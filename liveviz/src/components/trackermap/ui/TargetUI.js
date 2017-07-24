import React from 'react';
import {map, range, join} from 'ramda';


const TargetUI = ({x, y, z, color, posture, showPosture, showZLayer, showShadow}) => {
    const targetClasses = {
        "blue": "blue-target",
        "orange": "orange-target",
        "green": "green-target",
    };
    const postures =  {
        Sitting: "sitting",
        Standing: "standing",
        Lying: "lying",
        Walking: "standing",
    }
    const targetClass = targetClasses[color] || "blue-target";

    const getShadow = () => {
        if (!showShadow){
            return '';
        }

        var shadows =  map((item) =>{
          // we need to have continuity between the target and the shadow
          // therefore we are creating several shadows.
            const shadowVal = (item*4) + 4
            return `${shadowVal}px ${shadowVal}px 0px 0px black`
        }, range(0, z))
        return(join(',', shadows))
    }

    return (
        <div
          className="targetUI-block"
          style={{top: y, left: x,}}>
            <div className="z-layer">
              {showZLayer ? z : ''}
            </div>
            <div
              className={`target-arena ${targetClass}`}
              style={{"boxShadow": getShadow()}}>
                <div
                  className={`target-arena-posture target-arena-${showPosture ? postures[posture] : ''}`}/>
            </div>
        </div>
    )
}

export default TargetUI;
