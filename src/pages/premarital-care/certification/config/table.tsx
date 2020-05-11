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
    title: '女方姓名',
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
    title: '男方姓名',
    dataIndex: 'modifiedBy',
    key: 'modifiedBy',
    align: 'center',
  },
  {
    title: '证件号',
    dataIndex: 'age',
    key: 'age',
    align: 'center',
  },
  {
    title: '日期',
    dataIndex: 'dob',
    key: 'dob',
    align: 'center',
  },
  {
    title: '婚检证明',
    dataIndex: 'createDate',
    key: 'createDate',
    align: 'center',
    render: value => formatTimeToStandard(value),
  },
];
