import numeral from 'numeral';
import Bar from './Bar';

const yuan = (val: string | number) => `¥ ${numeral(val).format('0,0')}`;

const Charts = {
  yuan,
  Bar,
};

export {
  Charts as default,
  yuan,
  Bar
}
