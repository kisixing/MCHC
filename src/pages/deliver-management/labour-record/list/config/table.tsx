import { formatTimeToStandard } from '@/utils/format';
import { get } from 'lodash';

export const tableColumns = [
  {
    title: '产妇姓名',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '住院号',
    dataIndex: 'areaNO',
    align: 'center',
  },
  {
    title: '证件号码',
    dataIndex: 'idNO',
    align: 'center',
  },
  {
    title: '分娩孕周',
    dataIndex: 'gestationalWeek',
    align: 'center',
  },
  {
    title: '第一产程',
    dataIndex: 'firststage',
    align: 'center',
  },
  {
    title: '第二产程',
    dataIndex: 'secondstage',
    align: 'center',
  },
  {
    title: '第三产程',
    dataIndex: 'thirdstage',
    align: 'center',
  },
  // {
  //   title: '胎方位',
  //   dataIndex: 'idNO',
  //   align: 'center',
  // },
  // {
  //   title: '分娩方式',
  //   dataIndex: 'idNO',
  //   align: 'center',
  // },
  // {
  //   title: '脐带长度',
  //   dataIndex: 'idNO',
  //   align: 'center',
  // },
  // {
  //   title: '产后2小时出血',
  //   dataIndex: 'idNO',
  //   align: 'center',
  // },
  // {
  //   title: '记录者',
  //   dataIndex: 'idNO',
  //   align: 'center',
  // },
  // {
  //   title: '接生者',
  //   dataIndex: 'idNO',
  //   align: 'center',
  // },
];
