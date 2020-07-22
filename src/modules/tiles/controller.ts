import { Request, Response } from 'express';
import helper from './helper';
export class TileController {
  private storage: any = {};
  private colors: Array<string> = [];
  startGame = (_req: Request, res: Response) => {
    const { rows, cols, colors } = helper.generateMatrix(6);
    this.storage = { rows, cols };
    this.colors = colors;
    try {
      const { response } = helper;
      return res.status(200).json(
        response('data', {
          rows,
          cols,
          colors,
        }),
      );
    } catch (error) {
      const { response } = helper;
      return res.status(500).json(
        response('error', {
          serverError: 'something wrong please try again later',
        }),
      );
    }
  };

  playGame = (req: Request, res: Response) => {
    const { response } = helper;
    try {
      const { color } = req.body;
      const result = this.storage.reverse();
      return res.status(200).json(response('data', { result }));
    } catch (error) {
      return res.status(500).json(
        response('error', {
          serverError: 'something wrong please try again later',
        }),
      );
    }
  };
}
export default new TileController();
