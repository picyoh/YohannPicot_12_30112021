import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';

import { CustomTool } from './CustomTool';
import { CustomCursor } from './CustomCursor';

import { getActivity } from './../../services/dataManager';
import { sizeCharts } from './../../services/sizeCharts';

/**
 * Set a bar chart for user daily activity
 *
 * @param   {Object}  props
 * @param   {Boolean}  props.standAlone  Is component in full page
 *
 * @return  {Component}              return Activity component
 */
function Activity(props) {
    const { standAlone } = props;
    // Get id from url
    const params = useParams();
    const id = parseInt(params.userId);
    // Get datas
    const [isLoading, setLoading] = useState(true);
    const [sessions, getSession] = useState();

    useEffect(() => {
        const datas = getActivity(id);
        getSession(datas)
        setLoading(false);
    }, [id])

    if (isLoading) return <div className="loading">Loading</div>

    // get chart dimensions from browser
    const sizes = sizeCharts("activity", standAlone)
    const chartWidth = sizes.chartWidth;
    const chartHeight = sizes.chartHeight;
    const chartMargin = sizes.chartMargin;
    const componentMargin = sizes.componentMargin;

    // Css style for legend 
    const legendStyle = {
        position: "absolute",
        top: "20px",
        fontSize: "0.7rem",
    }

    return (
        <div className="activity" style={(standAlone) ? (componentMargin) : null}>
            <h3>Activité quotidienne</h3>
            <BarChart
                width={chartWidth}
                height={chartHeight}
                data={sessions}
                barSize={8}
                margin={chartMargin}
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
                    wrapperStyle={legendStyle}
                />
                <Tooltip cursor={<CustomCursor props={sessions} />} content={<CustomTool props={sessions} />} />
                <Bar name="Poids (kg)" yAxisId="right" dataKey="kilogram" fill="black" radius={[20, 20, 0, 0]} />
                <Bar name="Calories brûlées (kCal)" yAxisId="left" dataKey="calories" fill="#FF0101" radius={[20, 20, 0, 0]} />
            </BarChart>
        </div>
    )
}

Activity.propTypes = {
    standAlone: PropTypes.bool
};

export default Activity