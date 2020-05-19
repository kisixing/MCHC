import React from 'react';
import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { processFromApi } from './config/adpater';
import { router } from 'umi';
import { get, map, filter, isNil, set, isEmpty, pick } from 'lodash';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/premarital-visits',
    baseTitle: '男性婚检记录',
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
      'visitType.equals': 2,
    },
    dataSource: [],
    visible: false,
    editable: false,
    id: undefined,
    loading: true,
  };

  handleEdit = (rowData: any) => () => {
    const id = get(rowData, 'husband.id');
    router.push(`/premarital-care/husband/husband-exam?id=${id}`);
  };

  handleQuerySearch = (data: any) => {
    const { outpatientNO, name, idNO } = data;
    const queryData = {
      'husbandOutpatientNO.equals': outpatientNO,
      'husbandName.equals': name,
      'husbandIdNO.equals': idNO,
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
