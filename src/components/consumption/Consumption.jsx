import React from 'react'

function Consumption(props) {
    const imgAddr = "/img/" + props.data + ".svg";

    return (
        <div className="consumption">
            <img className={props.data} src={imgAddr} alt={props.data} />
            <div className="consumptionText">
                <p> {props.value}{(props.data === 'calories') ? ('kCal') : ('g')} </p>
                <p className="consumptionType"> {props.data} </p>
            </div>
        </div>
    )
}

export default Consumption