import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import ModalForm from './components/ModalForm';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/versions',
    baseTitle: '版本',
    needPagination: false,
    showQuery: false,
    tableColumns,
    rowKey: 'id',
    showAdd: true,
    Table,
    ModalForm,
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
