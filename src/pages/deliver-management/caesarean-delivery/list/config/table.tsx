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
    title: '手术日期',
    dataIndex: 'operationDate',
    align: 'center',
  },
  {
    title: '手术者',
    dataIndex: 'operator',
    align: 'center',
  },
  {
    title: '记录者',
    dataIndex: 'recorder',
    align: 'center',
  },
];
