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
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '孕周',
    dataIndex: 'gestationalWeek',
    key: 'gestationalWeek',
    align: 'center',
  },
  {
    title: '预产期-日期',
    dataIndex: 'edd',
    key: 'edd',
    align: 'center',
  },
  {
    title: '预产期-B超',
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
    key: 'parity',
    align: 'center',
  },
  {
    title: '门诊号',
    dataIndex: 'outpatientNO',
    key: 'outpatientNO',
    align: 'center',
  },
  {
    title: '产检编号',
    dataIndex: 'checkupNO',
    key: 'checkupNO',
    align: 'center',
  },
];
