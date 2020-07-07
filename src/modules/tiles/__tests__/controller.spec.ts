import app from '../../../app';
import request from 'supertest';
import { TileController } from '../controller';

describe('TileController', () => {
  describe(TileController.prototype.startGame, () => {
    it('should generate board and colors', async () => {
      const res = await request(app).get('/api/start-game');
      expect(res.status).toEqual(200);
      expect(typeof res.status).toBe('number');
      expect(res.body).toHaveProperty('data');
      expect(res.body.data).toHaveProperty('result');
      expect(res.body.data).toHaveProperty('colors');
    });
  });
});
