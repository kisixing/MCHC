import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/audits',
    baseTitle: '审计',
    rowKey: 'id',
    needPagination: true,
    showQuery: false,
    tableColumns,
    showAdd: false,
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
}
