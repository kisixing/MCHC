import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '手术日期',
    dataIndex: 'operationDate',
    key: 'operationDate',
    align: 'center',
  },
  {
    title: '手术名称',
    dataIndex: 'operationName',
    key: 'operationName',
    align: 'center',
  },
  {
    title: '术者(医生)名称',
    dataIndex: 'operator',
    key: 'operator',
    align: 'center',
  },
  // {
  //   title: 'P',
  //   dataIndex: 'parity',
  //   key: 'parity',
  //   align: 'center',
  // },
  // {
  //   title: 'P',
  //   dataIndex: 'parity',
  //   key: 'parity',
  //   align: 'center',
  // }
];
