import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'

import { sizeCharts } from '../../services/sizeCharts';
import { getPerformance } from './../../services/dataManager'

/**
 * Set a radar chart for user performances
 *
 * @param   {Object}  props   
 * @param   {Boolean}  props.standAlone  Is component in full page
 *
 * @return  {Object}              return Performance component
 */
function Performance(props){
    const {standAlone} = props;
    // Get id from url
    const params = useParams();
    const id = parseInt(params.userId);
    // Get datas
    const [isLoading, setLoading] = useState(true);
    const [perf, getPerf] = useState();

    useEffect(() => {
        const datas = getPerformance(id);
        getPerf(datas)
        setLoading(false);
    }, [id])


    if (isLoading) return <div className="loading">Loading</div>

    // Get dimension from browser
    const sizes = sizeCharts("average", standAlone);
    const chartWidth = sizes.chartWidth;
    const chartHeight = sizes.chartHeight;
    const componentMargin = sizes.componentMargin;

    return (
        <div className="performance" style={(standAlone) ? (componentMargin) : null} >
            <RadarChart
                outerRadius="70%"
                width={chartWidth}
                height={chartHeight}
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

Performance.propTypes = {
    standAlone: PropTypes.bool
};

export default Performance