import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '门诊号',
    dataIndex: 'outpatientNO',
    align: 'center',
    width: 100,
  },
  {
    title: '检查编号',
    dataIndex: 'checkupNO',
    align: 'center',
    width: 100,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width: 100,
    align: 'center',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width: 100,
    align: 'center',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    width: 100,
    align: 'center',
  },
  {
    title: '出生日期',
    dataIndex: 'dob',
    width: 100,
    align: 'center',
  },
  {
    title: '证件类型',
    dataIndex: 'idType',
    width: 100,
    align: 'center',
  },
  {
    title: '证件号码',
    dataIndex: 'idNO',
    width: 100,
    align: 'center',
  },
  {
    title: '联系电话',
    dataIndex: 'telephone',
    width: 100,
    align: 'center',
  },
];
