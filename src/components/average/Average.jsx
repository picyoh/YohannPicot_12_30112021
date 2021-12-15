import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

import { getAverageSessions } from './../../services/dataManager'
import { CustomTool, CustomBackground, CustomTick } from './CustomCharts'

function Average(props) {
    const id = props.id;

    const [isLoading, setLoading] = useState(true);
    const [sessions, getSessions] = useState('');
    const [perc, setPerc] = useState('50');

    useEffect(() => {
        getSessions(getAverageSessions(id))
        setLoading(false);
    }, [id])

    if (isLoading) {
        return <div className="loading">Loading</div>
    }

    function handleClick(data){
        const activePerc = data.activeLabel*14
        setPerc(activePerc)
    }

    return (
        <div className="average-sessions">
            <h3>Durée moyenne des sessions</h3>
            <LineChart
                width={(window.innerWidth) * .17}
                height={(window.innerHeight) * .24}
                data={sessions}
                onClick={handleClick}
                margin={{
                    top: 45,
                    left: -5,
                    bottom: 20,
                    right: -5
                }}
            >
                <Tooltip cursor={<CustomBackground props={sessions} />} content={<CustomTool props={sessions} />} />
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor='white' stopOpacity={0.4} />
                        <stop offset={`${(perc) - 40}%`} stopColor='white' stopOpacity={0.6} />
                        <stop offset={`${(perc)}%`} stopColor='white' stopOpacity={1} />
                        <stop offset={`${(perc) + 40}%`} stopColor='white' stopOpacity={0.6} />
                        <stop offset="100%" stopColor='white' stopOpacity={0.4} />
                    </linearGradient>
                </defs>
                <XAxis
                    type='number'
                    dataKey="day"
                    stroke="white"
                    axisLine={false}
                    domain={['dataMin', 'dataMax']}
                    interval={0}
                    tickCount={9}
                    tickLine={false}
                    tick={<CustomTick props={sessions} />}
                />
                <Line
                    type="natural"
                    dataKey="sessionLength"
                    stroke="url(#lineGradient)"
                    dot={false}
                    activeDot={{ r: 3 }}
                />
            </LineChart>
        </div>
    )
}

export default Average