import express from 'express';
import ConfigRoutes from './routes';
import Config from './config/config';
const app = express();
ConfigRoutes(app);
app.listen(process.env.PORT || Config.application.PORT);
