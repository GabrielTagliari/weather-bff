import { Response } from 'express';
import WeatherAction from '../actions/WeatherAction';

class WeatherController {  
  getWeather(req: any, res: Response) {
    new WeatherAction().getWeather()
      .then(response => {
        res.status(200).json({ response });
      })
      .catch(err => {
        console.error(err);
      })
  }
}

export default WeatherController;