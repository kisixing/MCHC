import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { router } from 'umi';
import { message } from 'antd';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/admissions',
    baseTitle: '产后访视',
    needPagination: true,
    showQuery: false,
    // showAdd: true,
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
    router.push('/deliver-management/admission/deliver-edit');
    // router.push('/deliver-management/postpartum-visit/add');
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    // router.push(`/deliver-management/admission/deliver-edit`);
    message.error('该功能尚未开发');
  };
}
