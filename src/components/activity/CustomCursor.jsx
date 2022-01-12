import PropTypes from 'prop-types'

/**
 * [Custom activity chart cursor]
 * @param {Number} x position x
 * @param {Number} y position y
 * @param {Number} left Padding Left 
 * @param {Number} height Height of activity chart
 * @returns {SVGElement}
 */
const CustomCursor = ({x, y, left, height}) => {

    return (
        <g className="customCursor">
            <rect x={x -left/2} y={y} width={left} height={height} fill="black" opacity={0.1}/>
        </g>
    );
}

CustomCursor.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    left: PropTypes.number,
    height: PropTypes.number
}

export { CustomCursor }