import { Request, Response } from 'express';

const list = (req: Request, res: Response) => {
  res.json([]);
};

export default {
  'GET /api/permissions?type.equals=menu&size=200': list,
};
