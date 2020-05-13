import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { router } from 'umi';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/admissions',
    baseTitle: '儿童健康体检',
    needPagination: true,
    showQuery: false,
    showAdd: true,
    tableColumns,
    rowKey: 'id',
    Table,
  };

  state = {
    total: 0,
    defaultQuery: {
      page: 0,
      size: 20,
    },
    dataSource: [],
    visible: false,
    editable: false,
    id: undefined,
    loading: true,
  };

  handleAdd = () => {
    router.push('/child-examination/examination-edit');
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/child-examination/examination-edit?id=${id}`);
  };
}
