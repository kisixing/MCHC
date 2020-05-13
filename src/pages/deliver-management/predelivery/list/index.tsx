import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import { processFromApi, toApi } from './config/adapter';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/nurse-records',
    baseTitle: '待产记录',
    needPagination: false,
    needEditInTable: true,
    showQuery: false,
    showAdd: false,
    tableColumns,
    rowKey: 'id',
    processFromApi,
    toApi,
    Table,
  };

  state = {
    total: 0,
    defaultQuery: {
      // 一般护理记录
      'type.equals': 3,
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
