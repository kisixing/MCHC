import { Request, Response } from 'express';

const list = (req: Request, res: Response) => {
  res.json([]);
};

export default {
  'GET /api/permissions': list,
  'GET /api/user/admin': list,
};
