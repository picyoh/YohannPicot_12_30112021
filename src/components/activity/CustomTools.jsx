import React from "react";

const CustomCursor = (props) => {
    console.log(props)
    const {x, y, left, height} = props;

    const boxHeight = height; 
    
    return (
        <g className="customCursor">
            <rect x={x -left/2} y={y} width={left} height={boxHeight} fill="black" opacity={0.1}/>
        </g>
    );
}

const CustomTool = (props) => {
    const { active, label } = props;

    if (!active) return <div></div>

    return (
        <div className='toolContainer'>
            <p>{props.props[label].kilogram + "kg"}</p>
            <p>{props.props[label].calories + "kCal"}</p>
        </div>
    );
}

export {CustomCursor, CustomTool}