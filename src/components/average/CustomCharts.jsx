import React from "react";

const days = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', ''];

const CustomTick = (props) => {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y + 25})`}>
            <text x={-4} y={0} fill="white" fontSize={'0.6rem'} fontWeight={500} opacity={0.7}>
                {days[payload.value]}
            </text>
        </g>
    );
}

const CustomBackground = (props) => {
    const {points, width, height, bottom} = props;

    const boxWidth = width - points[0].x;
    const boxHeight = height + 2 * bottom; 
    
    return (
        <g className="customBackground">
            <rect x={points[0].x} top={0} width={ boxWidth } height={boxHeight} fill="black" opacity={0.1}/>
        </g>
    );
}

const CustomTool = (props) => {
    const { active, label } = props;

    if (!active) return <div></div>

    return (
        <div className='toolContainer'>
            <p>{props.props[label].sessionLength + "min"}</p>
        </div>
    );
}

export {
    CustomTick,
    CustomBackground,
    CustomTool
}