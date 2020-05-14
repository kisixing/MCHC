import { get, map, pick } from 'lodash';

export const processFromApi = (data: any) => {
  return map(data, item => {
    return {
      ...get(item, 'specialNurse'),
      ...item,
    };
  });
};

export const toApi = (data: any) => {
  return {
    ...data,
    specialNurse: {
      ...get(data, 'specialNurse'),
      ...pick(data, [
        'systolic',
        'diastolic',
        'presentation',
        'descent',
        'cervix',
        'contractionintensity',
        'heartrate',
      ]),
    },
  };
};
