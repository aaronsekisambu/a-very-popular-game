import * as express from 'express';
import tileCtrl from './controller';
const app = express.Router();

app.get('/start-game', tileCtrl.startGame);

// POST play
app.post('/play', tileCtrl.playGame);
export default app;
