import React, { useEffect, useState } from 'react'

import { getMainData } from './../../services/dataManager'

import Activity from './../../components/activity/Activity'
import Average from './../../components/average/Average'
import Performance from './../../components/performance/Performance'
import Score from './../../components/score/Score'
import Consumption from './../../components/consumption/Consumption'

function Charts({id}) {

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
                <Activity standAlone={false} />
            </div>
            <div className="charts__left__down">
                <Average standAlone={false} />
                <Performance standAlone={false} />
                <Score standAlone={false} />
            </div>
            </div>
            <div className='charts__right'>
                <Consumption type="calories" value={calories} />
                <Consumption type="proteines" value={proteins} />
                <Consumption type="glucides" value={glucids} />
                <Consumption type="lipides" value={lipids} />
            </div>
        </article>
    )
}

export default Charts