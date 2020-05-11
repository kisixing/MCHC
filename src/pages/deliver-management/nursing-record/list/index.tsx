import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { router } from 'umi';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/admissions',
    baseTitle: '护理记录',
    needPagination: false,
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
    router.push('/deliver-management/nursing-record/add');
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/deliver-management/nursing-record/edit?id=${id}`);
  };
}
