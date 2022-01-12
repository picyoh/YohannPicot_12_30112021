import PropTypes from 'prop-types'

/**
 * Customize background shader for active point
 * @param {Array} points Active point coordinates
 * @param {Number} width Chart width
 * @param {Number} height Chart Height
 * @param {Number} bottom Chart padding bottom
 * @returns {SVGElement}
 */
const CustomBackground = ({points, width, height, bottom}) => {
    // Calc background size
    const boxWidth = width - points[0].x;
    const boxHeight = height + 2 * bottom;
    // Set custom background for line chart
    return (
        <g className="customBackground">
            <rect x={points[0].x} top={0} width={boxWidth} height={boxHeight} fill="black" opacity={0.1} />
        </g>
    );
}

CustomBackground.propTypes = {
    points: PropTypes.array,
    width: PropTypes.number,
    height: PropTypes.number,
    bottom: PropTypes.number
}

export { CustomBackground }