import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { processFromApi } from './config/adpater';
import { router } from 'umi';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/premarital-visits',
    baseTitle: '男性婚检记录',
    needPagination: false,
    showQuery: false,
    showAdd: false,
    processFromApi,
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
    router.push('/deliver-management/admission/add');
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/premarital-care/husband/husband-exam?id=${id}`);
  };
}
