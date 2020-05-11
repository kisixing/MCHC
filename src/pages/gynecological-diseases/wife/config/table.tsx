import { formatTimeToStandard } from './node_modules/@/utils/format';

export const tableColumns = [
  // {
  //   title: '编号',
  //   dataIndex: 'id',
  //   key: 'id',
  //   align: 'center',
  // },
  {
    title: '编号',
    dataIndex: 'entityId',
    key: 'entityId',
    align: 'center',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '证件号',
    dataIndex: 'idNO',
    key: 'idNO',
    width: '20%'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '出生日期',
    dataIndex: 'dob',
    key: 'dob',
    align: 'center',
  },
  {
    title: '配偶姓名',
    dataIndex: 'modifiedBy',
    key: 'modifiedBy',
    align: 'center',
  },
  {
    title: '建档日期',
    dataIndex: 'createDate',
    key: 'createDate',
    align: 'center',
    render: value => formatTimeToStandard(value),
  },
  {
    title: '建档人',
    dataIndex: 'modifiedBy',
    key: 'modifiedBy',
    align: 'center',
  },
];
