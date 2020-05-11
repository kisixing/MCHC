import moment, { Moment, isMoment } from 'moment';
import { map } from 'lodash';

export const formatTimeToStandard = (date: any, format = 'YYYY-MM-DD HH:mm:ss') => {
  const formatedDate = moment(date).format(format);
  if (formatedDate !== 'Invalid date') {
    return moment(date).format(format);
  }
  return '-';
};

export const formatTimeToUTC = (date: any) =>
  moment(date)
    .utc()
    .format();

export const formatTimeToApi = (date: Moment) => date.format();

export const transferMenus = (menus: any, parentid = 0) => {
  const temp: any = [];
  map(menus, item => {
    if (item.parentid === parentid) {
      item.title = item.name;
      item.key = item.id;
      item.children = transferMenus(menus, item.id);
      temp.push(item);
    }
  });
  return temp;
};
