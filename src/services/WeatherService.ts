const axios = require('axios');

const getWeather = () => {
  return new Promise((resolve, reject) => {
    let url = `${process.env.BASE_URL}/weather?lat=-23.626497&lon=-46.579978`;
    console.log(url);
    axios
      .get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        console.error(err);
        reject(err);
      })
  })
}

module.exports.getWeather = getWeather;