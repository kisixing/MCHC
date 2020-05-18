import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import { isEmpty, get } from 'lodash';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import ModalForm from './components/ModelForm';
import request from '@/utils/request';
import queryString from 'query-string';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/form-descriptions/sections',
    baseTitle: '模块配置',
    needPagination: true,
    showQuery: false,
    tableColumns,
    rowKey: 'id',
    showAdd: true,
    Table,
    ModalForm,
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

  handleSearch = async (query = {}) => {
    const { baseUrl } = this.props;
    const { defaultQuery } = this.state;
    const params = {
      ...defaultQuery,
      ...query,
    };
    const result = await request.get(
      isEmpty(params) ? (baseUrl as string) : `${baseUrl}?${queryString.stringify(params)}`,
    );
    const dataSource = get(result, 'data.data');
    const total = get(result, 'data.total');
    this.setState({ dataSource, total, loading: false });
  };
}
