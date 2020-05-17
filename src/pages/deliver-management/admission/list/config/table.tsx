import { formatTimeToStandard } from '@/utils/format';
import { IDCardMappingByValue, genderMappingByValue } from '@/components/selects/NormalSelect';
import { get } from 'lodash';

export const tableColumns = [
  {
    title: '住院号',
    dataIndex: 'inpatientNO',
    align: 'center',
  },
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
    key: 'bedNO',
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
    title: '性别',
    dataIndex: 'gender',
    align: 'center',
    render: (value: string) => get(genderMappingByValue, `${value}.title`),
  },
  {
    title: '出生日期',
    dataIndex: 'dob',
    align: 'center',
  },
  {
    title: '孕产期',
    dataIndex: 'edd',
    align: 'center',
  },
  {
    title: '证件类型',
    dataIndex: 'idType',
    key: 'idType',
    align: 'center',
    render: (value: string) => get(IDCardMappingByValue, `${value}.title`),
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
    align: 'center',
    render: (value: string) => formatTimeToStandard(value),
  },
];
