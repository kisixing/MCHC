import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import { isEmpty, get } from 'lodash';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import ModalForm from './components/ModelForm';
import request from '@/utils/request';
import queryString from 'query-string';
import Query from './components/Query';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/form-descriptions/descriptions',
    baseTitle: '表单详情',
    needPagination: true,
    showQuery: true,
    tableColumns,
    rowKey: 'id',
    showAdd: true,
    Table,
    ModalForm,
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

  handleSearch = async (value = {}) => {
    const { baseUrl } = this.props;
    const { defaultQuery } = this.state;
    let params = {};
    if (!isEmpty(value)) {
      params = {
        ...defaultQuery,
        ...value,
        page: 0,
      };
      this.setState({
        defaultQuery: { ...defaultQuery, page: 0 },
      });
    } else {
      params = defaultQuery;
    }
    const result = await request.get(`${baseUrl}?${queryString.stringify(params)}`);
    const dataSource = get(result, 'data.data');
    const total = get(result, 'data.total');
    this.setState({ dataSource, total, loading: false });
  };
}
