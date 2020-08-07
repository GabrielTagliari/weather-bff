import * as express from 'express';
import WeatherController from '../controllers/WeatherController';

const router = express.Router();
const weatherController = new WeatherController();

router.get(
  `/weather`,
  weatherController.getWeather.bind(WeatherController)
);

export = router;
