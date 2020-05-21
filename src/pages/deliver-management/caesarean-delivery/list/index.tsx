import React from 'react';
import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import { processFromApi } from './config/adapter';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { router } from 'umi';
import request from '@/utils/request';
import queryString from 'query-string';
import { map, isNil, isEmpty, isFunction, get } from 'lodash';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/admissions',
    baseTitle: '剖宫产记录',
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

  handleSearch = async (queryParams: any = {}) => {
    const { baseUrl, needPagination, processFromApi, asChildComponentQueryLabel = '', id: propsId } = this.props;
    const labourRecordsUrl = '/labour-records';
    const { defaultQuery } = this.state;
    // TODO: 有可能作为页面的子组件， propsId 是 BaseList 作为子组件从 props 传入的
    const query = propsId
      ? {
          ...defaultQuery,
          'caesareanDeliveryId.specified': true,
          [asChildComponentQueryLabel]: propsId,
          ...queryParams,
        }
      : {
          ...defaultQuery,
          'caesareanDeliveryId.specified': true,
          ...queryParams,
        };
    const dataSource = isFunction(processFromApi)
      ? processFromApi(
          await request.get(`${labourRecordsUrl}${query ? `?${queryString.stringify(query as object)}` : ''}`),
        )
      : await request.get(`${labourRecordsUrl}${query ? `?${queryString.stringify(query as object)}` : ''}`);
    let total = 0;
    if (needPagination) {
      total = await request.get(`${baseUrl}/count`);
    }
    this.setState({ dataSource, total, loading: false });
  };

  handleEdit = (rowData: any) => () => {
    const id = get(rowData, 'caesareanDelivery.id');
    router.push(`/deliver-management/caesarean-delivery/edit?id=${id}`);
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
