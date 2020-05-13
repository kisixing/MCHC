import { formatTimeToStandard } from '@/utils/format';

export const tableColumns = [
  {
    title: '日期',
    dataIndex: 'nursedate',
    align: 'center',
    editable: true,
    inputType: 'single_date_picker',
    width: 200,
    render: (value: any) => formatTimeToStandard(value, 'YYYY-MM-DD'),
  },
  {
    title: '时间',
    dataIndex: 'nursetime',
    align: 'center',
    inputType: 'single_time_picker',
    inputProps: { format: 'HH:mm' },
    editable: true,
    render: (value: any) => formatTimeToStandard(value, 'HH:mm'),
  },
  {
    title: '收缩压',
    dataIndex: 'systolic',
    editable: true,
  },
  {
    title: '舒张压',
    dataIndex: 'diastolic',
    editable: true,
    align: 'center',
  },
  {
    title: '先露',
    dataIndex: 'presentation',
    editable: true,
    align: 'center',
  },
  {
    title: '先露高低',
    dataIndex: 'descent',
    editable: true,
    align: 'center',
  },
  // {
  //   title: '胎方位',
  //   dataIndex: 'dob',
  //   editable: true,
  //   align: 'center',
  // },
  {
    title: '胎膜',
    dataIndex: 'membranesruptured',
    editable: true,
    align: 'center',
  },
  {
    title: '宫颈',
    dataIndex: 'cervix',
    editable: true,
    align: 'center',
  },
  {
    title: '宫缩',
    dataIndex: 'contractionintensity',
    editable: true,
    align: 'center',
  },
  {
    title: '胎心率',
    dataIndex: 'heartrate',
    editable: true,
    align: 'center',
  },
  {
    title: '其他',
    dataIndex: 'note',
    editable: true,
    align: 'center',
  },
  // {
  //   title: '检查者',
  //   dataIndex: 'adminDate',
  //   align: 'center',
  // },
];
