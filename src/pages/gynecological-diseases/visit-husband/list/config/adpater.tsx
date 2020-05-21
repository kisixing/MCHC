import { get, map } from 'lodash';

export const processFromApi = (data: any[]) => {
  return map(data, (item: object) => {
    return {
      ...item,
      name: get(item, 'husband.name'),
      age: get(item, 'husband.age'),
      wifename: get(item, 'wife.name')
    };
  });
};
