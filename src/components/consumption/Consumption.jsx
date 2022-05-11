import React from 'react'
import PropTypes from 'prop-types'

/**
 * Set Consumptions components
 *
 * @param   {Object}  props 
 * @param   {Boolean}  props.type  Consumption type
 * @param   {Boolean}  props.value  Consumption value from backend
 *
 * @return  {Object}              return Consumption component
 */
function Consumption(props) {
    const {type, value} = props;
    // Set image adress from type
    const imgAddr = process.env.PUBLIC_URL + "/img/" + type + ".svg";
    return (
        <div className="consumption">
            <img className={type} src={imgAddr} alt={type} />
            <div className="consumptionText">
                <p> {value}{(type === 'calories') ? ('kCal') : ('g')} </p>
                <p className="consumptionType"> {type} </p>
            </div>
        </div>
    )
}

Consumption.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string
}

export default Consumption