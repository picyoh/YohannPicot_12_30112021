import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, Tooltip } from 'recharts';

import { getAverageSessions } from './../../services/dataManager'
import { CustomTool, CustomBackground, CustomTick } from './CustomCharts'

function Average(props) {
    const id = props.id;

    const [isLoading, setLoading] = useState(true);
    const [sessions, getSessions] = useState('');

    useEffect(() => {
        getSessions(getAverageSessions(id))
        setLoading(false);
    }, [id])

    
    if (isLoading) {
        return <div className="loading">Loading</div>
    }

    return (
        <div className="average-sessions">
            <h3>Durée moyenne des sessions</h3>
            <LineChart
            className='average-'
            width={(window.innerWidth) * .17}
            height={(window.innerHeight) * .24}
            data={sessions}
            margin={{
                top: 45,
                bottom: 20,
            }}
            >
                <Tooltip cursor={<CustomBackground props={sessions} />} content={<CustomTool props={sessions} />} />
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
                    stroke="white"
                    opacity={0.5}
                    dot={false}
                    activeDot={{r:3, opacity:1}}
                />
            </LineChart>
        </div>
    )
}

export default Average