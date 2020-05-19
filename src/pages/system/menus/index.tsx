import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { processFromApi } from './config/adapter';
import { get } from 'lodash';
import ModalForm from './components/MenuModal';
import { Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import commonStyles from '@/common.less';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/permissions',
    baseTitle: '菜单/页面/权限',
    needPagination: false,
    showQuery: false,
    tableColumns,
    rowKey: 'id',
    showAdd: true,
    processFromApi,
    Table,
    ModalForm,
    otherTableProps: { expandRowByClick: true },
  };

  state = {
    total: 0,
    defaultQuery: {
      page: 0,
      size: 500,
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
      dataIndex: 'operation',
      hiddenSorter: true,
      hiddenFilter: true,
      render: (value: any, rowData: any, index: number) => {
        return (
          <>
            <Button
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
              <Button className={commonStyles.tableActionBtn} type="danger" size="small">
                <DeleteOutlined />
                删除
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];
}
