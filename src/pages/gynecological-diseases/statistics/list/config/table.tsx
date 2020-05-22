import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '病区号',
    dataIndex: 'areaNO',
    key: 'areaNO',
    align: 'center',
  },
  {
    title: '房号',
    dataIndex: 'roomNO',
    key: 'roomNO',
    align: 'center',
  },
  {
    title: '床号',
    dataIndex: 'bedNO',
    key: 'bedNO',
  },
  {
    title: '孕妇姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '孕妇年龄',
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
    title: '住院日期',
    dataIndex: 'adminDate',
    key: 'adminDate',
    align: 'center',
  },
];
