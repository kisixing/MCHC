import React from 'react';
import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { processFromApi } from './config/adpater';
import { get, map, filter, isNil, set, isEmpty, pick } from 'lodash';
import { router } from 'umi';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/cervical-cancers',
    baseTitle: '宫颈癌筛查情况',
    needPagination: false,
    showQuery: false,
    showAdd: true,
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

  handleEdit = (rowData: any) => () => {
    const id = get(rowData, 'wife.id');
    router.push(`/premarital-care/wife/wife-exam?id=${id}`);
  };

  handleAdd = () => () => {
    router.push(`/gynecological-diseases/cervical-cancer-screen/add`);
  };

  handleQuerySearch = (data: any) => {
    const { outpatientNO, name, idNO } = data;
    const queryData = {
      'wifeCriteria.outpatientNO.contains': outpatientNO,
      'wifeCriteria.name.contains': name,
      'wifeCriteria.idNO.contains': idNO,
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
