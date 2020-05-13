import { Request, Response } from 'express';

const list = (req: Request, res: Response) => {
  res.json([
    {
      id: 1,
      areaNO: '111',
      roomNO: '222',
      bedNO: '333',
      name: '333',
      age: '333',
      gender: '333',
      dob: '2019-01-01',
      idType: '333',
      idNO: '333',
      adminDate: '2019-01-01',
    },
  ]);
};

const show = (req: Request, res: Response) => {
  res.json({
    id: 1,
    areaNO: '111',
    roomNO: '222',
    bedNO: '333',
    name: '333',
    age: '333',
    gender: '333',
    dob: '2019-01-01',
    idType: '333',
    idNO: '333',
    adminDate: '2019-01-01',
  });
};

export default {
  // 'GET /api/admissions': list,
  // 'GET /api/admissions/1': show,
};
