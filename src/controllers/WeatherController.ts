import { Response } from 'express';
import WeatherAction from '../actions/WeatherAction';

class WeatherController {
  private weatherAction = new WeatherAction();

  getWeather(req: any, res: Response) {
    console.log('Entrei no controller')
    console.log(WeatherAction)
    this.weatherAction
      .getWeather()
      .then(response => {
        res.status(200).json({ response });
      })
      .catch(err => {
        console.error(err);
      })
  }
}

export default WeatherController;