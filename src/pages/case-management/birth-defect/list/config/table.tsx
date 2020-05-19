import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
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
    title: '编号',
    dataIndex: 'caseNO',
    key: 'caseNO',
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
    dataIndex: 'birthDate',
    key: 'birthDate',
    align: 'center',
  },
  {
    title: '出生孕周',
    dataIndex: 'birthWeek',
    key: 'birthWeek',
    align: 'center',
  }
];
