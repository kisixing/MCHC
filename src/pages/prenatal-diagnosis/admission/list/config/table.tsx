import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '孕妇姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '门诊号',
    dataIndex: 'outpatientNO',
    key: 'outpatientNO',
    align: 'center',
  },
  {
    title: '证件号码',
    dataIndex: 'idNO',
    key: 'idNO',
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '预产期-日期',
    dataIndex: 'edd',
    key: 'edd',
    align: 'center',
  }
];
