import React, { useEffect, useState } from 'react'

import { getMainData } from './../../services/dataManager'

import Activity from './../../components/activity/Activity'
import Average from './../../components/average/Average'
import Performance from './../../components/performance/Performance'
import Score from './../../components/score/Score'
import Consumption from './../../components/consumption/Consumption'

function Charts(props) {

    const id = props.id;

    const [calories, setCalories] = useState();
    const [proteins, setProteins] = useState();
    const [glucids, setGlucids] = useState();
    const [lipids, setLipids] = useState();

    useEffect(() => {
        setCalories(getMainData(id, 'calories'));
        setProteins(getMainData(id, 'proteins'));
        setGlucids(getMainData(id, 'glucids'));
        setLipids(getMainData(id, 'lipids'));
    }, [id]);

    

    return (
        <article className='charts'>
            <div className="charts__left">
            <div className="charts__left__up">
                <Activity id={ id } />
            </div>
            <div className="charts__left__down">
                <Average id={ id } />
                <Performance id={ id } />
                <Score id={ id } />
            </div>
            </div>
            <div className='charts__right'>
                <Consumption data="calories" value={calories} />
                <Consumption data="proteines" value={proteins} />
                <Consumption data="glucides" value={glucids} />
                <Consumption data="lipides" value={lipids} />
            </div>
        </article>
    )
}

export default Charts