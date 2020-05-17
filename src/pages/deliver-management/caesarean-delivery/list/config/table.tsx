import { formatTimeToStandard } from '@/utils/format';
import { get } from 'lodash';

export const tableColumns = [
  {
    title: '姓名',
    dataIndex: 'admissionName',
    align: 'center',
    fixed: true,
    width: 100,
    render: (value: any, rowData: any) => get(rowData, 'admission.name'),
  },
  {
    title: '孕周',
    dataIndex: 'gestationalWeek',
    align: 'center',
    fixed: true,
    width: 100,
    render: (value: any, rowData: any) => get(rowData, 'admission.gestationalWeek'),
  },
  {
    title: '孕产期',
    dataIndex: 'edd',
    align: 'center',
    width: 120,
    fixed: true,
    render: (value: any, rowData: any) => get(rowData, 'admission.edd'),
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
    title: '证件类型',
    dataIndex: 'idType',
    key: 'idType',
    align: 'center',
  },
  {
    title: '证件号码',
    dataIndex: 'idNO',
    key: 'idNO',
    align: 'center',
  },
  {
    title: '住院日期',
    dataIndex: 'adminDate',
    key: 'adminDate',
    align: 'center',
  },
];
