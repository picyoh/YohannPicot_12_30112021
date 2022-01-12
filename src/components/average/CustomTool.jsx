import PropTypes from 'prop-types'

/**
 * Custom line tool content
 * @param {Object} props Datas from line chart
 * @param {Boolean} active Tool is active  
 * @param {Number} label Tool index 
 */
 const CustomTool = ({props, active, label}) => {
    // Set tool if inactive
    if (!active) return <div></div>
    // Set tool content for line chart
    return (
        <div className='toolContainer'>
            <p>{props[label].sessionLength + "min"}</p>
        </div>
    );
}

CustomTool.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.number
}

export { CustomTool }