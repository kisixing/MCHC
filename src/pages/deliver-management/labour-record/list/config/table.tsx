import { formatTimeToStandard } from '@/utils/format';
import { get } from 'lodash';

export const tableColumns = [
  {
    title: '胎膜破裂时间',
    dataIndex: 'membranesrupturedtime',
    align: 'center',
    render: (value: any) => formatTimeToStandard(value),
  },
  {
    title: '破膜方式',
    dataIndex: 'membranesrupturedtype',
    align: 'center',
  },
  {
    title: '宫口开全时间',
    dataIndex: 'cervixdopenedtime',
    render: (value: any) => formatTimeToStandard(value),
  },
  {
    title: '总产程时间',
    dataIndex: 'totalTime',
    align: 'center',
    render: (value: any, rowData: any, index: any) =>
      `${Number(get(rowData, 'totalstageh'))}时${Number(get(rowData, 'totalstagem'))}分`,
  },
  {
    title: '胎数',
    dataIndex: 'fetalcount',
    align: 'center',
  },
];
