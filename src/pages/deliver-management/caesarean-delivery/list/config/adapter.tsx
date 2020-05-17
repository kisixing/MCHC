import { map, get } from 'lodash';

export const processFromApi = (data: any) => {
  return map(data, item => {
    return {
      ...item,
      ...get(item, 'caesareanDelivery'),
    };
  });
};
