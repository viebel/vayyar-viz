import React from 'react';


const TargetUI = ({x, y, type, showPosition}) => {
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
    return (
        <div className={`target-arena ${targetClass}`} style={{top: y, left: x}}>
            <div className={`target-arena-posture target-arena-${showPosition ? postures[type] : ''}`}/>
        </div>
    );
}

export default TargetUI;