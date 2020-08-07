import * as express from 'express';
import * as utilsRoutes from './routes/UtilsRoutes';
import * as weatherRoutes from './routes/WeatherRoutes';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.unProtectedRoutes();
    this.protectedRoutes();
  }

  unProtectedRoutes() {
    this.app.use('/', utilsRoutes);
  }

  protectedRoutes() {
    this.app.use('/', weatherRoutes);
  }
}

export default new App();