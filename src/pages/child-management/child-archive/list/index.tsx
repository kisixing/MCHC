import React from 'react';
import { router } from 'umi';
import { get } from 'lodash';
import { Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';

import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import { processFromApi } from './config/adpater';

import commonStyles from '@/common.less';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/child-archives',
    baseTitle: '儿童档案',
    needPagination: true,
    showQuery: true,
    showAdd: true,
    tableColumns,
    processFromApi,
    rowKey: 'id',
    Table,
    Query
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
      align: 'center',
      hiddenSorter: true,
      hiddenFilter: true,
      fixed: 'right',
      width: '150px',
      render: (value: any, rowData: any, index: number) => {
        return (
          <>
            <Button
              className={commonStyles.tableActionBtn}
              type="primary"
              size="small"
              title="新建体检记录"
              onClick={this.handleAddVisit(rowData)}
            >
              <PlusOutlined />
              新建体检
            </Button>
            {rowData.childExamVisits && rowData.childExamVisits.length ? (
              <Button
                className={commonStyles.tableActionBtn}
                type="primary"
                size="small"
                title="查看体检记录"
                onClick={this.handleView(rowData)}
              >
                <EyeOutlined title="查看" />
                体检记录
              </Button>
            ) : null}
            <Button
              title="编辑儿童档案"
              className={commonStyles.tableActionBtn}
              type="primary"
              size="small"
              onClick={this.handleEdit(rowData)}
            >
              <EditOutlined />
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
    router.push('/child-management/child-archive/add');
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/child-management/child-archive/edit?id=${id}`);
  };

  handleView = (rowData: any) => () => {
    const { id, childExamVisits } = rowData;
    if (!childExamVisits || (childExamVisits && !childExamVisits.length)) {
      // 新建体检档案
      return router.push(`/child-management/child-examination/deliver-add`);
    }
    // 查看体检档案列表
    router.push(`/child-management/child-examination?childId=${id}`);
  };

  // 创建体检记录
  handleAddVisit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/child-management/child-examination/deliver-add?childId=${id}`);
  }
}
