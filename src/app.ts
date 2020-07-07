import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from './modules/tiles/routes';
import path from 'path';
const app: Application = express();

// setup morgan
app.use(morgan('dev'));

// public folder
app.use(express.static(path.resolve(__dirname, '../public')));
// setup body parser
app.use(bodyParser.json());

// routes setup
app.use('/api', routes);

app.get('/', (_req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '../public/index.html'));
});
export default app;
