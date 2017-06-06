import React from 'react';


const TargetUI = ({x, y, type, posture}) => {
    const targetClasses = {
        "circle": "blue-target",
        "square": "orange-target",
        "triangle": "green-target",
    };
    const targetClass = targetClasses[type] || "target-unknown";
    return (
        <div className={`target-arena ${targetClass}`} style={{top: y, left: x}}>
            <div className={`target-arena-posture target-arena-${posture}`}/>
        </div>
    );
}

export default TargetUI;