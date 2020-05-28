import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import Query from './components/Query';
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
    baseUrl: '/prenatal-patients',
    baseTitle: '产前病历',
    needPagination: true,
    showQuery: true,
    showAdd: true,
    tableColumns,
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
      render: (value: any, rowData: any, index: number) => {
        return (
          <>
            <Button
              className={commonStyles.tableActionBtn}
              type="primary"
              
              onClick={this.handleView(rowData)}
            >
              <EyeOutlined title="查看" />
            </Button>
            <Button
              title="编辑"
              className={commonStyles.tableActionBtn}
              type="primary"
              
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
              <Button title="删除" className={commonStyles.tableActionBtn} type="danger" >
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  handleAdd = () => {
    router.push('/prenatal-diagnosis/new-patient');
  };

  handleView = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/prenatal-diagnosis/main?prenatalPatientId=${id}`);
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/prenatal-diagnosis/new-patient?prenatalPatientId=${id}`);
  };
}
