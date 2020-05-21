import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '门诊号',
    dataIndex: 'outpatientNO',
    key: 'outpatientNO',
    align: 'center',
  },
  {
    title: '检查编号',
    dataIndex: 'checkupNO',
    key: 'checkupNO',
    align: 'center',
  },
  {
    title: '姓名',
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
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
    align: 'center',
  },
  {
    title: '出生日期',
    dataIndex: 'dob',
    key: 'dob',
    align: 'center',
  },
  {
    title: '证件类型',
    dataIndex: 'idType',
    key: 'idType',
    align: 'center',
  },
  {
    title: '证件号码',
    dataIndex: 'idNO',
    key: 'idNO',
    align: 'center',
  },
  {
    title: '联系电话',
    dataIndex: 'telephone',
    key: 'telephone',
  },
];
