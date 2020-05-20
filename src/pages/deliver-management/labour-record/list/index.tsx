import React from 'react';
import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import { router } from 'umi';
import { processFromApi } from './config/adpater';
import WithDynamicExport from '@/components/WithDynamicExport';
import { map, isNil, isEmpty } from 'lodash';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/labour-records',
    baseTitle: '分娩记录',
    needPagination: true,
    showQuery: true,
    showAdd: false,
    processFromApi,
    tableColumns,
    rowKey: 'id',
    Table,
    Query,
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
    router.push('/deliver-management/labour-record/add');
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/deliver-management/labour-record/edit?id=${id}`);
  };

  handleQuerySearch = (data: any) => {
    const { name, idNO } = data;
    const queryData = {
      'admissionCriteria.name.contains': name,
      'admissionCriteria.idNO.contains': idNO,
    };
    let newQueryData = {};
    map(queryData, (value, key) => {
      if (!isNil(value) && !isEmpty(value)) {
        newQueryData = {
          ...newQueryData,
          [key]: value,
        };
      }
    });
    this.handleSearch(newQueryData);
  };
}
