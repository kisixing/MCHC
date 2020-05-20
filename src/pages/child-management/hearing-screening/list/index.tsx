import React from 'react';
import { router } from 'umi';
import { get } from 'lodash';
import { Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import { processFromApi } from './config/adpater';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';

import commonStyles from '@/common.less';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    rowKey: 'id',
    baseUrl: '',
    baseTitle: '儿童听力筛查',
    needPagination: true,
    showQuery: true,
    showAdd: true,
    tableColumns,
    processFromApi,
    Table,
    Query,
  };

  state = {
    total: 0,
    defaultQuery: {
      'childArchivesId.equals': get(this.props, 'location.query.childId')
        ? get(this.props, 'location.query.childId')
        : undefined,
      page: 0,
      size: 20,
    },
    dataSource: [],
    visible: false,
    editable: false,
    id: undefined,
    loading: true,
  };

  columns = [
    ...(this.props.tableColumns as Array<any>),
    {
      title: '操作',
      align: 'center',
      hiddenSorter: true,
      hiddenFilter: true,
      fixed: 'right',
      render: (value: any, rowData: any, index: number) => {
        return (
          <>
            <Button
              title="编辑"
              className={commonStyles.tableActionBtn}
              type="primary"
              size="small"
              onClick={this.handleEdit(rowData)}
            >
              <EditOutlined />
              编辑
            </Button>
            <Popconfirm
              title={`确定要删除这个${get(this.props, 'baseTitle')}吗?`}
              onConfirm={this.handleDelete(rowData)}
              okText="确定"
              cancelText="取消"
            >
              <Button title="删除" className={commonStyles.tableActionBtn} type="danger" size="small">
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  handleAdd = () => {
    // router.push('/child-examination/archive');
  };

  handleView = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/child-management/child-examination/deliver-edit?id=${id}`);
  };

  // handleEdit = (rowData: any) => () => {
  //   const { id } = rowData;
  //   router.push(`/child-examination/examination-edit?id=${id}`);
  // };
}
