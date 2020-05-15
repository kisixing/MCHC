import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '病区号',
    dataIndex: 'areaNO',
    align: 'center',
  },
  {
    title: '房号',
    dataIndex: 'roomNO',
    align: 'center',
  },
  {
    title: '床号',
    dataIndex: 'bedNO',
  },
  {
    title: '孕妇姓名',
    dataIndex: 'name',
    align: 'center',
  },
  {
    title: '孕妇年龄',
    dataIndex: 'age',
    align: 'center',
  },
  {
    title: '手术类型',
    dataIndex: 'operationType',
    align: 'center',
  },
  {
    title: '手术名称',
    dataIndex: 'operationName',
    align: 'center',
  },
  {
    title: '手术编号',
    dataIndex: 'serialNo',
    align: 'center',
  },
  {
    title: '手术级别',
    dataIndex: 'grade',
    align: 'center',
  },
  {
    title: '手术日期',
    dataIndex: 'operationDate',
    align: 'center',
  },
  {
    title: '出室时间',
    dataIndex: 'outTime',
    align: 'center',
  },
  {
    title: '手术者',
    dataIndex: 'operator',
    align: 'center',
  },
  {
    title: '助手1',
    dataIndex: 'assistant',
    align: 'center',
  },
  {
    title: '助手2',
    dataIndex: 'assistant2',
    align: 'center',
  },
  {
    title: '护士',
    dataIndex: 'nurse',
    align: 'center',
  },
  {
    title: '巡回护士',
    dataIndex: 'circuiting',
    align: 'center',
  },
  {
    title: '记录者',
    dataIndex: 'recorder',
    align: 'center',
  },
  {
    title: '麻醉信息',
    hiddenSorter: true,
    hiddenFilter: true,
    dataIndex: 'Cdanaesthetic',
    children: [
      {
        title: '麻醉方式',
        dataIndex: 'type',
        align: 'center',
      },
      {
        title: '麻醉效果',
        dataIndex: 'effect',
        align: 'center',
      },
      {
        title: '麻醉医生',
        dataIndex: 'doctor',
        align: 'center',
      },
    ],
  },
  {
    title: '术前记录',
    dataIndex: 'CdPreOperation',
    hiddenSorter: true,
    hiddenFilter: true,
    children: [
      {
        title: '体温',
        dataIndex: 'temperature',
        align: 'center',
      },
      {
        title: '脉搏',
        dataIndex: 'pluse',
        align: 'center',
      },
      {
        title: '心率',
        dataIndex: 'heartrate',
        align: 'center',
      },
      {
        title: '收缩压',
        dataIndex: 'systolic',
        align: 'center',
      },
      {
        title: '舒张压',
        dataIndex: 'diastolic',
        align: 'center',
      },
      {
        title: '体位',
        dataIndex: 'position',
        align: 'center',
      },
      {
        title: '倾斜',
        dataIndex: 'lean',
        align: 'center',
      },
      {
        title: '胎心',
        dataIndex: 'fhr',
        align: 'center',
      },
      {
        title: '规律',
        dataIndex: 'regularity',
        align: 'center',
      },
      {
        title: '手术指征',
        dataIndex: 'indication',
        align: 'center',
      },
      {
        title: '术前诊断',
        dataIndex: 'diagnosis',
        align: 'center',
      },
    ],
  },
];
