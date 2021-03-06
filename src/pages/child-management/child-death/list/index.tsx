import React from 'react';
import { router } from 'umi';
import { get } from 'lodash';
import { Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';

import commonStyles from '@/common.less';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/child-deaths',
    baseTitle: '儿童死亡登记',
    needPagination: false,
    showQuery: true,
    showAdd: true,
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

  columns = [
    ...(this.props.tableColumns as Array<any>),
    {
      title: '操作',
      hiddenSorter: true,
      hiddenFilter: true,
      fixed: 'right',
      width: 188,
      align: 'center',
      render: (value: any, rowData: any, index: number) => {
        return (
          <>
            <Button
              title="编辑"
              type="primary"
              size="small"
              className={commonStyles.tableActionBtn}
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
              <Button danger size="small" title="删除" className={commonStyles.tableActionBtn}>
                <DeleteOutlined />
                删除
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  handleAdd = () => {
    router.push('/child-management/child-death/add');
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/child-management/child-death/edit?id=${id}`);
  };
}
