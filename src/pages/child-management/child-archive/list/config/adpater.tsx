import { get, map } from 'lodash';

export const processFromApi = (data: any[]) => {
  return map(data, (item: object) => {
    return {
      ...item,
      name: get(item, 'name'),
      dob: get(item, 'dob'),
      age: get(item, 'age'),
      // eslint-disable-next-line no-nested-ternary
      gender: get(item, 'gender') === 0 ? '男' : get(item, 'gender') === 1 ? '女' : '',
      motherName: get(item, 'mother.name'),
      fatherName: get(item, 'father.name'),
    };
  });
};
