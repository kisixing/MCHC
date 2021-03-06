import React from 'react';
import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { router } from 'umi';
import { get } from 'lodash';
import { Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import commonStyles from '@/common.less';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/pregnancies',
    baseTitle: '高危记录',
    needPagination: true,
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
      'riskRecordId.specified':true
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
      render: (value: any, rowData: any, index: number) => {
        return (
          <>
            <Button
              title="详情"
              className={commonStyles.tableActionBtn}
              type="primary"

              onClick={this.handleEdit(rowData)}
            >
              <EditOutlined />
              详情
            </Button>
            <Popconfirm
              title={`确定要删除这个${get(this.props, 'baseTitle')}吗?`}
              onConfirm={this.handleDelete(rowData)}
              okText="确定"
              cancelText="取消"
            >
              <Button title="删除" className={commonStyles.tableActionBtn} type="danger" >
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
    router.push('/prenatal-visit/pregnancy/add');
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/prenatal-visit/pregnancy/edit?id=${id}`);
  };
}
