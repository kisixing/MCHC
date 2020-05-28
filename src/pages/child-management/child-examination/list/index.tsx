import React from 'react';
import { router } from 'umi';
import { get } from 'lodash';
import { Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';

import Table from './components/Table';
import Query from './components/Query';
import { tableColumns } from './config/table';
import { processFromApi } from './config/adpater';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { ModalIframeView } from '@/components/PDFPreview';

import commonStyles from '@/common.less';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    rowKey: 'id',
    baseUrl: '/child-exam-visits',
    baseTitle: '儿童健康体检',
    needPagination: true,
    showQuery: true,
    showAdd: false,
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
      width: 240,
      render: (value: any, rowData: any, index: number) => {
        return (
          <>
            <Button
              className={commonStyles.tableActionBtn}
              type="primary"
              
              title="编辑"
              onClick={this.handleView(rowData)}
            >
              <EditOutlined />
              编辑
            </Button>
            <ModalIframeView className={commonStyles.tableActionBtn} file={rowData.pfdurl}>
              <EyeOutlined />
              PDF
            </ModalIframeView>
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
    // router.push('/child-examination/archive');
  };

  handleView = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/child-management/child-examination/deliver-edit?id=${id}`);
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    router.push(`/child-examination/examination-edit?id=${id}`);
  };
}
