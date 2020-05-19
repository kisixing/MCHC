import React from 'react';
import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { router } from 'umi';
import { map, isNil, isEmpty, pick } from 'lodash';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/noenate-records',
    baseTitle: '新生儿记录',
    needPagination: true,
    showQuery: true,
    showAdd: false,
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

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/deliver-management/neonate-record/edit?id=${id}`);
  };

  handleQuerySearch = (data: any) => {
    const { name, idNO } = data;
    const queryData = {
      'admissionName.equals': name,
      'admissionIdNO.equals': idNO,
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
