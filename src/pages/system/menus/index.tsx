import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { processFromApi } from './config/adapter';
import ModalForm from './components/MenuModal';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/permissions',
    baseTitle: '菜单/权限',
    needPagination: true,
    showQuery: false,
    tableColumns,
    rowKey: 'id',
    showAdd: true,
    processFromApi,
    Table,
    ModalForm,
    otherTableProps: { expandRowByClick: true },
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
