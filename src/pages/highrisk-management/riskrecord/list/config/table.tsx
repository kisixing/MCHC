import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '产检编号',
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
    title: '出生日期',
    dataIndex: 'dob',
    key: 'dob',
    align: 'center',
  },
  {
    title: '高危等级',
    dataIndex: 'highrisk',
    key: 'highrisk',
    align: 'center',
  },
  {
    title: '高危概况',
    dataIndex: 'highriskNote',
    key: 'highriskNote',
    align: 'center',
  }
];
