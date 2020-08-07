const WeatherService = require('../services/WeatherService');

class WeatherAction {
  getWeather() {
    return new Promise((resolve, reject) => {
      WeatherService.getWeather()
        .then((response: any) => {
          resolve(response);
        })
    });
  }
}

export default WeatherAction;