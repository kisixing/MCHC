import { get } from 'lodash';
import moment from 'moment';
import { formatTimeToStandard } from '@/utils/format';

export const fromApi = (data: any) => {
  return {
    ...data,
    fireTime: moment(get(data, 'fireTime')),
  };
};

export const toApi = (data: any) => {
  return {
    ...data,
    fireTime: formatTimeToStandard(get(data, 'fireTime')),
  };
};
