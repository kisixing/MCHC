import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '编号',
    dataIndex: 'caseNO',
    key: 'caseNO',
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
    title: '父亲姓名',
    dataIndex: 'fatherName',
    key: 'fatherName',
    align: 'center',
  },
  {
    title: '母亲姓名',
    dataIndex: 'motherName',
    key: 'motherName',
    align: 'center',
  },
  {
    title: '死亡时间',
    dataIndex: 'deathTime',
    key: 'deathTime',
  },
];
