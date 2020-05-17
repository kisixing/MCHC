import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { router } from 'umi';
import { isFunction, get } from 'lodash';
import request from '@/utils/request';
import queryString from 'query-string';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/caesarean-deliveries',
    baseTitle: '剖宫产记录',
    needPagination: true,
    showQuery: false,
    showAdd: false,
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

  handleSearch = async () => {
    const { baseUrl, needPagination, processFromApi, asChildComponentQueryLabel = '', id: propsId } = this.props;
    const labourRecordsUrl = '/labour-records';
    const { defaultQuery } = this.state;
    // TODO: 有可能作为页面的子组件， propsId 是 BaseList 作为子组件从 props 传入的
    const query = propsId
      ? {
          ...defaultQuery,
          'caesareanDeliveryId.specified': true,
          [asChildComponentQueryLabel]: propsId,
        }
      : {
          ...defaultQuery,
          'caesareanDeliveryId.specified': true,
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
}
