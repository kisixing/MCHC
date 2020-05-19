import { typeMappingByValue } from '@/components/selects/PermissionTypeSelect';
import { get } from 'lodash';

export const tableColumns = [
  {
    title: '菜单/权限名称',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
  },
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
    render: (value: any) => get(typeMappingByValue, `${value}.title`),
  },
  {
    title: '路由/权限代码',
    dataIndex: 'key',
    key: 'key',
    align: 'center',
  },
];
