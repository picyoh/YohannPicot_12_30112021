/**
 * Changes date to index value in data object
 *
 * @param   {Object}  datas  Datas from backend
 *
 * @return  {Object}         return Processed activity data object
 */
function setActivity(datas) {
  const result = datas.map((session, index) => {
    session.day = index;
    return session;
  });
  return result;
}

/**
 * Extend Week's Length with day 0 & day 8  
 *
 * @param   {Object}  datas  Datas from backend
 *
 * @return  {Object}         return Processed average sessions object datas
 */
function setAverage(datas) {
  if (datas.length <= 9) {
    datas.unshift({ day: 0, sessionLength: 30 });
    datas.push({ day: 8, sessionLength: 30 });
  }
  return datas;
}

/**
 * Set data kind in data object
 *
 * @param   {Object}  datas  datas User's datas from backend
 *
 * @return  {Object}         return Processed performance object datas
 */
function setPerformance(datas) {
  const kinds = [
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité",
  ];

  const result = datas.map((data) => {
    data.kind = kinds[data.kind - 1];
    return data;
  });

  return result;
}

export { setActivity, setAverage, setPerformance };
