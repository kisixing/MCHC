import React from 'react';
import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import { processFromApi, toApi } from './config/adapter';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { message } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { map, isNil, isEmpty, pick } from 'lodash';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/nurse-records',
    asChildComponentQueryLabel: 'admissionId.equals',
    baseTitle: '待产记录',
    needPagination: true,
    needEditInTable: true,
    showQuery: true,
    showAdd: false,
    tableColumns,
    rowKey: 'id',
    processFromApi,
    toApi,
    Table,
    Query,
  };

  state = {
    total: 0,
    defaultQuery: {
      // 一般护理记录
      'type.equals': 3,
      page: 0,
      size: 20,
    },
    dataSource: [],
    visible: false,
    editable: false,
    id: undefined,
    editKey: undefined,
    loading: true,
  };

  handleAdd = () => {
    const { needEditInTable, showAdd, admissionData } = this.props;
    const { dataSource, editKey } = this.state;
    if (!isNil(editKey)) {
      message.error('请先保存上一条记录');
      return;
    }
    if (needEditInTable && showAdd) {
      const mockKey = new Date().toString();
      this.setState({
        editKey: mockKey,
        dataSource: [
          ...dataSource,
          {
            type: 3,
            editKey: mockKey,
            admission: {
              ...pick(admissionData, ['name', 'gestationalWeek', 'edd', 'id']),
            },
          },
        ],
      });
    }
  };

  handleItemCancel = (rowData: any) => () => {
    const { dataSource, editKey } = this.state;
    const form = this.form as FormInstance;
    form.resetFields();
    this.setState({
      id: undefined,
      editKey: undefined,
      dataSource: typeof editKey === 'string' ? dataSource.slice(0, dataSource.length - 1) : dataSource,
    });
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
