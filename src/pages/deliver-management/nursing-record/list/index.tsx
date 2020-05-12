import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/nurse-records',
    baseTitle: '护理记录',
    needPagination: false,
    needEditInTable: true,
    showQuery: false,
    showAdd: false,
    tableColumns,
    rowKey: 'id',
    Table,
  };
}
