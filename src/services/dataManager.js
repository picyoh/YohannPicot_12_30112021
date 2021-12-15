import {
  getMainDataMocked,
  getActivityMocked,
  getAverageSessionsMocked,
  getPerformanceMocked
} from "./dataManagerMocked";


// const server = "http//localhost:3000/user/";
const mockedData = true;


function getMainData(userId, key){
  if (mockedData) return getMainDataMocked(userId, key);
  //continuer avce fetch
  // const response = await fetch(server + userId);
  // return response.json();

}

function getActivity(id) {
  if (mockedData) return getActivityMocked(id);
  // const filtered = USER_ACTIVITY.filter((user) => user.userId === id);
  // const sessions = filtered[0].sessions;
  // const result = sessions.map((session, index) => {
  //   session.day = index;
  //   return session;
  // });
  // return result;
}

function getAverageSessions(id) {
  if (mockedData) return getAverageSessionsMocked(id);
  // const filtered = USER_AVERAGE_SESSIONS.filter((user) => user.userId === id);
  // const result = filtered[0].sessions;

  // if (result.length <= 9) {
  //   result.unshift({ day: 0, sessionLength: 30 });
  //   result.push({ day: 8, sessionLength: 30 });
  // }
  
  // return result;
}

function getPerformance(id) {
  if (mockedData) return getPerformanceMocked(id);
  // const filtered = USER_PERFORMANCE.filter((user) => user.userId === id);
  // const datas = filtered[0].data;
  // const kinds = [
  //   "Cardio",
  //   "Energie",
  //   "Endurance",
  //   "Force",
  //   "Vitesse",
  //   "Intensité",
  // ];

  // const result = datas.map((data) => {
  //   data.kind = kinds[data.kind - 1];
  //   return data;
  // });

  // return result;
}

export {
  getMainData,
  getActivity,
  getAverageSessions,
  getPerformance,
};
