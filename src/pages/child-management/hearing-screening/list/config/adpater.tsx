import { get, map } from 'lodash';

export const processFromApi = (data: any[]) => {
  return map(data, (item: object) => {
    return {
      ...item,
      name: get(item, 'childArchives.name'),
      dob: get(item, 'childArchives.dob'),
      age: get(item, 'childArchives.age'),
      // eslint-disable-next-line no-nested-ternary
      gender: get(item, 'childArchives.gender') === 0 ? '男' : get(item, 'childArchives.gender') === 1 ? '女' : '',
      motherName: get(item, 'childArchives.mother.name'),
      fatherName: get(item, 'childArchivesfather.name'),
    };
  });
};
