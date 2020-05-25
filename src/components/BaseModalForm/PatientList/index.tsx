import React from 'react';
import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { router } from 'umi';
import { Button } from 'antd';
import { EyeOutlined, ImportOutlined } from '@ant-design/icons';
import commonStyles from '@/common.less';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    // TODO: baseUrl 需要修改
    baseUrl: '/wives',
    baseTitle: '档案',
    needPagination: true,
    showQuery: true,
    showAdd: false,
    tableColumns,
    rowKey: 'id',
    Table,
    Query,
    otherTableProps: {
      scroll: { x: 500 },
    },
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
      width: 100,
      render: (value: any, rowData: any, index: number) => {
        return (
          <>
            <Button className={commonStyles.tableActionBtn} size="small" onClick={this.handleView(rowData)}>
              <EyeOutlined title="查看" />
              查看
            </Button>
            <Button
              title="导入"
              className={commonStyles.tableActionBtn}
              type="primary"
              size="small"
              onClick={this.handleExport(rowData)}
            >
              <ImportOutlined />
              导入
            </Button>
          </>
        );
      },
    },
  ];

  handleView = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/premarital-care/wife/edit?id=${id}`);
  };

  handleExport = (rowData: any) => () => {
    const { onExport } = this.props;
    onExport && onExport(rowData);
  };
}
