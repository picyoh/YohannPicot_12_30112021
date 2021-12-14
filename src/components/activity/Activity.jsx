import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

import { getActivity } from './../../services/dataManager'
import { CustomTool, CustomCursor } from './CustomTools'

function Activity(props) {
    const id = props.id;
    const legendStyle = {
        position: "absolute",
        top: "20px",
        fontSize: "0.7rem",
    }
    const [isLoading, setLoading] = useState(true);
    const [sessions, getSession] = useState();

    useEffect(() => {
        getSession(getActivity(id))
        setLoading(false);
    }, [isLoading, id])

    if (isLoading) {

        return <div className="loading">Loading</div>
    }

    return (
        <div className="activity">
            <h3>Activité quotidienne</h3>
            <BarChart
                width={ (window.innerWidth)*.56 }
                height={ (window.innerHeight)*.30 }
                data={sessions}
                barSize={8}
                margin={{
                    top: 70,
                    left:48,
                    bottom: 10
                }}
            >
                <CartesianGrid vertical={false} strokeDasharray="2" />
                <XAxis dataKey="day" stroke="$grey" scale="point" />
                <YAxis yAxisId="left" orientation="left" hide />
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="$grey"
                    domain={['dataMin -1', 'dataMax']}
                    axisLine={3}
                    tickCount={3}
                    tickMargin="20"
                />
                <Legend
                    width="100%"
                    iconType="circle"
                    iconSize="8"
                    align="right"
                    wrapperStyle={ legendStyle }
                />
                <Tooltip cursor={<CustomCursor props={sessions} />} content={<CustomTool props={sessions} />} />
                <Bar name="Poids (kg)" yAxisId="right" dataKey="kilogram" fill="black" radius={[20, 20, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" yAxisId="left" dataKey="calories" fill="#FF0101" radius={[20, 20, 0, 0]} />
            </BarChart>
        </div>
    )
}

export default Activity