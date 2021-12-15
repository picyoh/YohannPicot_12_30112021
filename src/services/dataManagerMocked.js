import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data";



/**
 * [getMainData get user firstname]
 *
 * @param   {String}  userId  [user id]
 *
 * @return  {String}      [return firstname]
 */
function getMainDataMocked(userId, key) {
  const filtered = USER_MAIN_DATA.filter((user) => user.id === userId);

  let result;

  switch (key) {
    case "firstName":
      result = filtered[0].userInfos.firstName;
      break;
    case "calories":
      const calc = (filtered[0].keyData.calorieCount / 1000).toFixed(3);
      const string = calc.toString();
      result = string.replace(".", ",");
      break;
    case "proteins":
      result = filtered[0].keyData.proteinCount;
      break;
    case "glucids":
      result = filtered[0].keyData.carbohydrateCount;
      break;
    case "lipids":
      result = filtered[0].keyData.lipidCount;
      break;
    case "score":
      filtered[0].todayScore
        ? (result = [
            { score: filtered[0].todayScore * 100 },
            { score: 100 - filtered[0].todayScore * 100 },
          ])
        : (result = [
            { score: filtered[0].score * 100 },
            { score: 100 - filtered[0].score * 100 },
          ]);
      break;
    default:
      console.log("error");
  }

  return result;
}

function getActivityMocked(id) {
  const filtered = USER_ACTIVITY.filter((user) => user.userId === id);
  const sessions = filtered[0].sessions;
  const result = sessions.map((session, index) => {
    session.day = index;
    return session;
  });
  return result;
}

function getAverageSessionsMocked(id) {
  const filtered = USER_AVERAGE_SESSIONS.filter((user) => user.userId === id);
  const result = filtered[0].sessions;

  if (result.length <= 9) {
    result.unshift({ day: 0, sessionLength: 30 });
    result.push({ day: 8, sessionLength: 30 });
  }
  
  return result;
}

function getPerformanceMocked(id) {
  const filtered = USER_PERFORMANCE.filter((user) => user.userId === id);
  const datas = filtered[0].data;
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

export {
  getMainDataMocked,
  getActivityMocked,
  getAverageSessionsMocked,
  getPerformanceMocked,
};
