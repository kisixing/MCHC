import numeral from 'numeral';
import Bar from './Bar';
import Pie from './Pie';

const yuan = (val: string | number) => `¥ ${numeral(val).format('0,0')}`;

const Charts = {
  yuan,
  Bar,
  Pie
};

export {
  Charts as default,
  yuan,
  Bar,
  Pie
}
