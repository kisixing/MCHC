import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '女方姓名',
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
    title: '男方姓名',
    dataIndex: 'husbandname',
    key: 'husbandname',
    align: 'center',
  },
  {
    title: '检查日期',
    dataIndex: 'visitDate',
    key: 'visitDate',
    align: 'center',
  },
  {
    title: '检查结果',
    dataIndex: 'result',
    key: 'result',
    align: 'center',
  },
  {
    title: '风险评估',
    dataIndex: 'highrisk',
    key: 'highrisk',
    align: 'center',
  },
];
