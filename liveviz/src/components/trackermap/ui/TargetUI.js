import React from 'react';
import {map, range, join} from 'ramda';


const TargetUI = ({x, y, z, type, showPosition, showZLayer, showShadow}) => {
    const targetClasses = {
        "circle": "blue-target",
        "square": "orange-target",
        "triangle": "green-target",
    };
    const postures =  {
        triangle: "sitting",
        square: "standing",
        circle: "lying",
    }
    const targetClass = targetClasses[type] || "target-unknown";

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
                  className={`target-arena-posture target-arena-${showPosition ? postures[type] : ''}`}/>
            </div>
        </div>
    )
}

export default TargetUI;
