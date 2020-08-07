const WeatherService = require('../services/WeatherService');

class WeatherAction {
  getWeather() {
    console.log('Entrei no action')
    return new Promise((resolve, reject) => {
      WeatherService.getWeather.exec()
        .then(response => {
          console.log(response);
          resolve('teste');
        })
    });
  }
}

export default WeatherAction;