import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
  },
  {
    title: '孕妇姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '末次月经',
    dataIndex: 'lmp',
    key: 'bedNO',
  },
  {
    title: '预产期-日期',
    dataIndex: 'edd',
    key: 'edd',
    align: 'center',
  },
  {
    title: '预产期-B炒',
    dataIndex: 'sureEdd',
    key: 'sureEdd',
    align: 'center',
  },
  {
    title: 'G',
    dataIndex: 'gravidity',
    key: 'gravidity',
    align: 'center',
  },
  {
    title: 'P',
    dataIndex: 'parity',
    key: 'adminDate',
    align: 'center',
  },
  {
    title: 'A',
    dataIndex: 'abortion',
    key: 'abortion',
    align: 'center',
  },
  {
    title: 'E',
    dataIndex: 'exfetation',
    key: 'exfetation',
    align: 'center',
  },
];
