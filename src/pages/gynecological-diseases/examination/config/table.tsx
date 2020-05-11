import { formatTimeToStandard } from '@/utils/format';

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
    title: '婚检日期',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '病史询问',
    dataIndex: 'dob',
    key: 'dob',
    align: 'center',
  },
  {
    title: '体格检查',
    dataIndex: 'modifiedBy',
    key: 'modifiedBy',
    align: 'center',
  },
  {
    title: '妇科检查',
    dataIndex: 'createDate',
    key: 'createDate',
    align: 'center',
    render: value => formatTimeToStandard(value),
  },
  {
    title: '实验室检查',
    dataIndex: 'createDate',
    key: 'createDate',
    align: 'center',
    render: value => formatTimeToStandard(value),
  },
  {
    title: '婚姻状态',
    dataIndex: 'modifiedBy',
    key: 'modifiedBy',
    align: 'center',
  },
];
