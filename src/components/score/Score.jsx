import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

import { getMainData } from './../../services/dataManager';

function Score(props) {
    const [isLoading, setLoading] = useState(true);
    const [score, getScore] = useState();

    const id = props.id;
    const COLORS = ["#FF0101", "transparent"];

    useEffect(() => {
        getScore(getMainData(id, 'score'))
        setLoading(false);
    }, [isLoading, id])

    if (isLoading) {
        return <div className="loading">Loading</div>
    }


    return (
        <div className='score'>
            <h3>Score</h3>
            <PieChart
                width={ (window.innerWidth)*.17 }
                height={ (window.innerHeight)*.24 }
            >
                <Pie
                    dataKey="score"
                    data={score}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={70}
                    fill="#FF0101"
                    cornerRadius={100}
                    stroke='none'
                    startAngle={90}
                >
                    {
                        (score) ?
                            (
                                score.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))
                            ) : null
                    }
                </Pie>
                <Pie
                    dataKey="score"
                    data={score}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={60}
                    fill="white"
                />
                <Tooltip />
            </PieChart>
            <div className='scoreLabel'>
                <p>{ score[0].score + "%" }</p>
                <p>de votre</p>
                <p>objectif</p>
                </div>
        </div>
    )
}

export default Score