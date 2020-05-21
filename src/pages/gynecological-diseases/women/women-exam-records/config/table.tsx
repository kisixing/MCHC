import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '检查类型',
    dataIndex: 'visitType',
    align: 'center',
  },
  {
    title: '检查流水号',
    dataIndex: 'serialNo',
    align: 'center',
  },
  {
    title: '检查日期',
    dataIndex: 'visitDate',
    align: 'center',
  },
  {
    title: '主诉',
    dataIndex: 'chiefcomplaint',
    align: 'center',
  },
  {
    title: '诊断',
    dataIndex: 'diagnosis',
    align: 'center',
  },
  {
    title: '诊断编码',
    dataIndex: 'diagnosisCode',
    align: 'center',
  },
  {
    title: '检查结果',
    dataIndex: 'result',
    align: 'center',
  },
  {
    title: '处理意见',
    dataIndex: 'advice',
    align: 'center',
  },
  {
    title: '医生',
    dataIndex: 'doctor',
    align: 'center',
  },
];
