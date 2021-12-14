import React, { useState, useEffect } from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'

import { getPerformance } from './../../services/dataManager'

function Performance(props) {
    const id = props.id;
    const [isLoading, setLoading] = useState(true);
    const [perf, getPerf] = useState();
    
    useEffect(() => {
        if(isLoading){
            getPerf(getPerformance(id))
            setLoading(false);
        }
    }, [isLoading, id])
    
    if (isLoading) {
        return <div className="loading">Loading</div>
    }
    
    return (
        <div className="performance">
            <RadarChart 
            outerRadius="70%"
            width={ (window.innerWidth)*.17 }
            height= { (window.innerHeight)*.24 }  
            fill="white"
            startAngle={-150}
            endAngle={210}
            data={perf}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" fontSize={'0.5rem'} />
                <Radar
                    name="userId"
                    dataKey="value"
                    fill="#FF0101"
                    fillOpacity={0.6}
                    
                />
            </RadarChart>
        </div>
    );
}

export default Performance