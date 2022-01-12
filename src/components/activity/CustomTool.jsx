import PropTypes from 'prop-types'

/**
 * [Custom activity chart tool]
 * @param { Object } props Data array
 * @param { Boolean } active Chart is active
 * @param { Number } label Label index
 * @returns {Component}
 */
 const CustomTool = ({props, active, label}) => {

    if (!active) return <div></div>

    return (
        <div className='toolContainer'>
            <p>{props[label].kilogram + "kg"}</p>
            <p>{props[label].calories + "kCal"}</p>
        </div>
    );
}

CustomTool.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.number
}

export { CustomTool }