import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import { PieChart, Pie, Cell, Tooltip } from 'recharts'

import { sizeCharts } from '../../services/sizeCharts';
import { getMainData } from './../../services/dataManager';

/**
 * Set a pie chart for user daily scores
 *
 * @param   {Object}  props   
 * @param   {Boolean}  props.standAlone  Is component in full page
 *
 * @return  {Object}              return Score component
 */
function Score(props) {
    const { standAlone } = props;
    // Get id from url
    const params = useParams();
    const id = parseInt(params.userId);
    // Get datas
    const [isLoading, setLoading] = useState(true);
    const [score, getScore] = useState();
    // set different colors for pie charts
    const COLORS = ["#FF0101", "transparent"];

    useEffect(() => {
        const datas = getMainData(id, 'score');
        getScore(datas)
        setLoading(false);
    }, [id])

    if (isLoading) return <div className="loading">Loading</div>

    // get dimension from browser
    const sizes = sizeCharts("average", standAlone);
    const chartWidth = sizes.chartWidth;
    const chartHeight = sizes.chartHeight;
    const componentMargin = sizes.componentMargin;
    const chartIn = (standAlone) ? (chartWidth / 6) : (chartWidth / 3);
    const chartOut = chartIn + 11;

    return (
        <div className='score' style={(standAlone) ? (componentMargin) : null} >
            <h3>Score</h3>
            <PieChart
                width={chartWidth}
                height={chartHeight}
            >
                <Pie
                    dataKey="score"
                    data={score}
                    cx="50%"
                    cy="50%"
                    innerRadius={chartIn}
                    outerRadius={chartOut}
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
                    outerRadius={chartIn}
                    fill="white"
                />
                <Tooltip />
            </PieChart>
            <div className='scoreLabel'>
                <p>{score[0].score + "%"}</p>
                <p>de votre</p>
                <p>objectif</p>
            </div>
        </div>
    )
}


Score.propTypes = {
    standAlone: PropTypes.bool
};

export default Score