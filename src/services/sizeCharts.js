/**
 * Size charts from window parameters
 *
 * @param   {String}  chartName   Charts name
 * @param   {Boolean}  standAlone  Is full page
 *
 * @return  {Object}              return Chart sizes
 */
function sizeCharts(chartName, standAlone) {
  //sizes for activity charts
  if (chartName === "activity") {
    // Set chart sizes and margin
    const chartWidth = standAlone
      ? window.innerWidth * 0.8
      : window.innerWidth * 0.56;
    const chartHeight = standAlone
      ? window.innerHeight * 0.7
      : window.innerHeight * 0.3;

    const componentMargin = {
      marginTop: window.innerWidth * 0.1,
      marginLeft: window.innerHeight * 0.05,
      marginBottom: window.innerWidth * 0.05,
      marginRight: window.innerHeight * 0.05,
    };

    const chartMargin = standAlone
      ? {
          top: window.innerWidth * 0.1,
          left: window.innerHeight * 0.1,
          right: window.innerHeight * 0.1,
        }
      : {
          top: 70,
          left: 48,
          bottom: 10,
        };

    return { chartWidth, chartHeight, componentMargin, chartMargin };
  }
  // Set chart sizes and margin
  const chartWidth = standAlone
    ? window.innerWidth * 0.8
    : window.innerWidth * 0.17;
  const chartHeight = standAlone
    ? window.innerHeight * 0.7
    : window.innerHeight * 0.24;

  const componentMargin = {
    marginTop: window.innerWidth * 0.1,
    marginLeft: window.innerHeight * 0.05,
    marginBottom: window.innerWidth * 0.05,
    marginRight: window.innerHeight * 0.05,
  };
  return { chartWidth, chartHeight, componentMargin };
}

export { sizeCharts };
