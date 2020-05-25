import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import { router } from 'umi';
import { connect } from 'dva';

export class List extends BaseList {
  static defaultProps = {
    baseUrl: '/gynecological-visits',
    baseTitle: '妇女检查记录',
    needPagination: true,
    showQuery: false,
    showAdd: true,
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

  handleAdd = async () => {
    const { id: patientId } = this.props;
    const { dispatch } = this.props;
    await dispatch({
      type: 'ids/changeWomenExamRecordsEditingId',
      payload: {
        womenExamRecordsEditingId: undefined,
      },
    });
    router.push(`/gynecological-diseases/women/women-exam-records/add?patientId=${patientId}`);
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/gynecological-diseases/women/women-exam-records/edit?id=${id}`);
  };
}

export default connect()(List);
