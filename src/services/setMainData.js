/**
 * Set main datas from backend results
 *
 * @param   {Object}  datas User's datas from backend
 * @param   {String}  key Kind of data to be returned
 *
 * @return  {Object} return Processed datas object
 */
function setMainData(datas, key) {
    let result;
    switch (key) {
      case "firstName":
        result = datas.userInfos.firstName;
        break;
      case "calories":
        const calc = (datas.keyData.calorieCount / 1000).toFixed(3);
        const string = calc.toString();
        result = string.replace(".", ",");
        break;
      case "proteins":
        result = datas.keyData.proteinCount.toString();
        break;
      case "glucids":
        result = datas.keyData.carbohydrateCount.toString();
        break;
      case "lipids":
        result = datas.keyData.lipidCount.toString();
        break;
      case "score":
        datas.todayScore
          ? (result = [
              { score: datas.todayScore * 100 },
              { score: 100 - datas.todayScore * 100 },
            ])
          : (result = [
              { score: datas.score * 100 },
              { score: 100 - datas.score * 100 },
            ]);
        break;
      default:
        console.log("error");
    }
  
    return result;
  }

  export { setMainData }