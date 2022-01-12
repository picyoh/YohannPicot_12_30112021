import React from "react";
import PropTypes from 'prop-types'

// New xAsis Legend Array
const days = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', ''];

/**
 * Customize xAsis Lengend
 * @param {Number} x Position x
 * @param {Number} y Position y
 * @param {Object} payload Legend content  
 * @returns {SVGElement}
 */
const CustomTick = ({ x, y, payload }) => {
    return (
        <g transform={`translate(${x},${y + 25})`}>
            <text x={-4} y={0} fill="white" fontSize={'0.6rem'} fontWeight={500} opacity={0.7}>
                {days[payload.value]}
            </text>
        </g>
    );
}

CustomTick.propTypes = {
    y: PropTypes.number,
    payload: PropTypes.object
}

export { CustomTick }