import React from 'react';
import Table from './components/Table';
import { pick } from 'lodash';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/nurse-records',
    asChildComponentQueryLabel: 'admissionId.equals',
    baseTitle: '护理记录',
    needPagination: true,
    needEditInTable: true,
    showQuery: false,
    showAdd: false,
    tableColumns,
    rowKey: 'id',
    Table,
  };

  state = {
    total: 0,
    defaultQuery: {
      // 一般护理记录
      'type.equals': 1,
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
    const { needEditInTable, showAdd, admissionData } = this.props;
    const { dataSource } = this.state;
    console.log(admissionData);
    if (needEditInTable && showAdd) {
      this.setState({
        dataSource: [
          ...dataSource,
          {
            type: 1,
            admission: {
              ...pick(admissionData, ['name', 'gestationalWeek', 'edd', 'id']),
            },
          },
        ],
      });
    }
  };
}
