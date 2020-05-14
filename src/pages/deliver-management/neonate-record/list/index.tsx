import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { router } from 'umi';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/noenate-records',
    baseTitle: '新生儿记录',
    needPagination: false,
    showQuery: false,
    showAdd: false,
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

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/deliver-management/neonate-record/edit?id=${id}`);
  };
}
