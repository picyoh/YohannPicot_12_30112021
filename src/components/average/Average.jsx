import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LineChart, Line, XAxis, Tooltip } from 'recharts';

import { CustomTick } from './CustomTick'
import { CustomTool } from './CustomTool'
import { CustomBackground } from './CustomBackground'

import { sizeCharts } from '../../services/sizeCharts';
import { getAverageSessions } from './../../services/dataManager'

/**
 * Set a line chart for weekly user average sessions duration
 *
 * @param   {Object}  props   
 * @param   {Boolean}  props.standAlone  Is component in full page
 *
 * @return  {Object}              return Average component
 */
function Average(props) {
    const {standAlone} = props;
    // Get id from url
    const params = useParams();
    const id = parseInt(params.userId);

    // Get datas
    const [isLoading, setLoading] = useState(true);
    const [sessions, getSessions] = useState('');
    const [perc, setPerc] = useState('50');

    useEffect(() => {
        const datas = getAverageSessions(id);
        getSessions(datas)
        setLoading(false);
    }, [id])

    if (isLoading) return <div className="loading">Loading</div>

    // get dimension from browser
    const sizes = sizeCharts("average", standAlone);
    const chartWidth = sizes.chartWidth;
    const chartHeight = sizes.chartHeight;
    const componentMargin = sizes.componentMargin;
    const chartMargin = (standAlone) ? (
        {
            top: (window.innerWidth) * .1,
            left: -5,
            bottom: (window.innerWidth) * .1,
            right: -5
        }
    ) : (
        {
            top: 45,
            left: -5,
            bottom: 20,
            right: -5
        }
    )
    // Handle click to set percent
    function handleClick({activeLabel}) {
        // Calc percent
        const activePerc = activeLabel * 14;
        setPerc(activePerc)
    }

    return (
        <div className="average-sessions" style={(standAlone) ? (componentMargin) : null}>
            <h3>Durée moyenne des sessions</h3>
            <LineChart
                width={chartWidth}
                height={chartHeight}
                data={sessions}
                onClick={handleClick}
                margin={chartMargin}
            >
                <Tooltip cursor={<CustomBackground props={sessions} />} content={<CustomTool props={sessions} />} />
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor='white' stopOpacity={0.3} />
                        <stop offset={`${(perc) - 40}%`} stopColor='white' stopOpacity={0.6} />
                        <stop offset={`${(perc)}%`} stopColor='white' stopOpacity={1} />
                        <stop offset={`${(perc) + 40}%`} stopColor='white' stopOpacity={0.6} />
                        <stop offset="100%" stopColor='white' stopOpacity={0.3} />
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

Average.propTypes = {
    standAlone: PropTypes.bool
};

export default Average