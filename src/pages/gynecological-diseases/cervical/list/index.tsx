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
    showQuery: true,
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
    const id = get(rowData, 'id');
    router.push(`/gynecological-diseases/cervical-cancer-screen/edit?id=${id}`);
  };

  handleAdd = () => {
    router.push(`/gynecological-diseases/cervical-cancer-screen/add`);
  };

  handleQuerySearch = (data: any) => {
    const { outpatientNO, name, idNO } = data;
    const queryData = {
      'gynecologicalPatientCriteria.outpatientNO.contains': outpatientNO,
      'gynecologicalPatientCriteria.name.contains': name,
      'gynecologicalPatientCriteria.idNO.contains': idNO,
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
