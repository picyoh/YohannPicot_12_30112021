import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./data";

import { setMainData } from "./setMainData";
import { setActivity, setAverage, setPerformance } from "./setSessionDatas";

// Mocked data option
const mockedData = true;

/**
 * Get main datas from backend
 *
 * @param   {Number}  id   Id from url params
 * @param   {String}  key  Data type to get
 *
 * @return  {Function}       return USER_MAIN_DATA object from backend to setMainData
 */
function getMainData(id, key) {
  // Get mockup datas
  if (mockedData) {
    const filtered = USER_MAIN_DATA.filter((user) => user.id === id);
    const datas = filtered[0];
    return setMainData(datas, key);
  }
  // Get backend datas
  fetch("http://localhost:3000/user/" + id)
    .then((response) => {
      if (response.ok) {
        const json = response.json();
        const datas = json.data;
        return setMainData(datas, key);
      }
    })
    .catch((error) => {
      console.log("main error", error);
    });
}

/**
 * Get activity datas from backend
 *
 * @param   {Number}  id  Id from url
 *
 * @return  {Function}      return USER_ACTIVITY object from backend to setActivity
 */
function getActivity(id) {
  // Get mockup datas
  if (mockedData) {
    const filtered = USER_ACTIVITY.filter((user) => user.userId === id);
    const datas = filtered[0].sessions;
    return setActivity(datas);
  }
  // Get backend datas
  fetch("http://localhost:3000/user/" + id + "/activity")
    .then((response) => {
      if (response.ok) {
        const json = response.json();
        const datas = json.data.sessions;
        return setActivity(datas);
      }
    })
    .catch((error) => {
      console.log("activity error", error);
    });
}

/**
 * Get average-sessions datas from
 *
 * @param   {Number}  id  Id from url
 *
 * @return  {Function}      return USER_AVERAGE_SESSIONS object from backend to setAverage
 */
function getAverageSessions(id) {
  // Get mockup datas
  if (mockedData) {
    const filtered = USER_AVERAGE_SESSIONS.filter((user) => user.userId === id);
    const datas = filtered[0].sessions;
    return setAverage(datas);
  }
  // Get backend datas
  fetch("http://localhost:3000/user/" + id + "/average-sessions")
    .then((response) => {
      if (response.ok) {
        const json = response.json();
        const datas = json.data;
        return setAverage(datas);
      }
    })
    .catch((error) => {
      console.log("average error");
    });
}

/**
 * Get Performance datas from backend
 *
 * @param   {Number}  id  id Id from url
 *
 * @return  {Function}      return USER_PERFORMANCE object from backend to setPerformance
 */
function getPerformance(id) {
  // Get mockup datas
  if (mockedData) {
    const filtered = USER_PERFORMANCE.filter((user) => user.userId === id);
    const datas = filtered[0].data;
    return setPerformance(datas);
  }
  // Get backend datas
  fetch("http://localhost:3000/user/" + id + "/performance")
    .then((response) => {
      if (response.ok) {
        const json = response.json();
        const datas = json.data.data;
        return setPerformance(datas);
      }
    })
    .catch((error) => {
      console.log("performance error");
    });
}

export { getMainData, getActivity, getAverageSessions, getPerformance };
