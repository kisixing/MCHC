import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '孕妇姓名',
    dataIndex: 'name',
    fixed: true,
    align: 'center',
  },
  {
    title: '孕妇年龄',
    dataIndex: 'age',
    fixed: true,
    align: 'center',
  },
  {
    title: '胎儿娩出时间',
    dataIndex: 'deliverytime',
    align: 'center',
    render: (value: string) => formatTimeToStandard(value),
  },
  {
    title: '娩出方式',
    dataIndex: 'deliverytype',
    align: 'center',
  },
  {
    title: '胎盘娩出时间',
    dataIndex: 'placentadeliveredtime',
    align: 'center',
    render: (value: string) => formatTimeToStandard(value),
  },
  {
    title: '胎盘娩出方式',
    dataIndex: 'placentadeliveredtype',
    align: 'center',
  },
  {
    title: '婴儿性别',
    dataIndex: 'gender',
    align: 'center',
  },
  {
    title: '婴儿体重',
    dataIndex: 'weight',
    align: 'center',
  },
  {
    title: '婴儿身长',
    dataIndex: 'height',
    align: 'center',
  },
  {
    title: '阿氏评分1',
    dataIndex: 'apgar1',
    align: 'center',
  },
  {
    title: '阿氏评分2',
    dataIndex: 'apgar5',
    align: 'center',
  },
  {
    title: '阿氏评分3',
    dataIndex: 'apgar10',
    align: 'center',
  },
  {
    title: '其他备注',
    dataIndex: 'otherNote',
    align: 'center',
  },
];
