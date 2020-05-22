import { formatTimeToStandard } from '@/utils/format';
import { get } from 'lodash';

export const tableColumns = [
  {
    title: '门诊号',
    dataIndex: 'outpatientNO',
    align: 'center',
    render: (value: string, rowData: any) => get(rowData, 'gynecologicalPatient.outpatientNO'),
  },
  {
    title: '姓名',
    dataIndex: 'name',
    align: 'center',
    render: (value: string, rowData: any) => get(rowData, 'gynecologicalPatient.name'),
  },
  {
    title: '身份证号',
    dataIndex: 'idNO',
    align: 'center',
    render: (value: string, rowData: any) => get(rowData, 'gynecologicalPatient.idNO'),
  },
  {
    title: '检查日期',
    dataIndex: 'visitDate',
    align: 'center',
    render: (value: string) => formatTimeToStandard(value),
  },
  {
    title: '检查结果',
    dataIndex: 'result',
    align: 'center',
  },
  {
    title: '检查结果备注',
    dataIndex: 'resultNote',
    align: 'center',
  },
  {
    title: '处理意见',
    dataIndex: 'advice',
    align: 'center',
  },
  {
    title: '诊断',
    dataIndex: 'diagnosis',
    align: 'center',
  },
  {
    title: '医生',
    dataIndex: 'doctor',
    align: 'center',
  },
];
