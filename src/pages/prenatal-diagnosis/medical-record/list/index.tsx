import React from 'react';
import Table from './components/Table';
import { tableColumns } from './config/table';
import BaseList from '@/components/BaseList';
import WithDynamicExport from '@/components/WithDynamicExport';
import { router } from 'umi';
import { get } from 'lodash';
import { Button, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import commonStyles from '@/common.less';
import { getPageQuery } from '@/utils/utils';

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/prenatal-diagnoses',
    baseTitle: '专科病历',
    needPagination: false,
    showQuery: false,
    showAdd: true,
    tableColumns,
    rowKey: 'id',
    Table,
    otherTableProps: {
      scroll: { x: true },
    },
  };

  state = {
    total: 0,
    defaultQuery: {
      'prenatalPatientId.equals': getPageQuery().prenatalPatientId || '',
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
            {/* <Button
              className={commonStyles.tableActionBtn}
              type="primary"
              size="small"
              onClick={this.handleView(rowData)}
            >
              <EyeOutlined title="查看" />
            </Button> */}
            <Button
              title="编辑"
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
    const urlParams = getPageQuery();
    router.push(`/prenatal-diagnosis/medical-record-form?prenatalPatientId=${urlParams.prenatalPatientId || ''}`);
  };

  handleEdit = (rowData: any) => () => {
    const { id } = rowData;
    const urlParams = getPageQuery();
    router.push(
      `/prenatal-diagnosis/medical-record-form?prenatalPatientId=${urlParams.prenatalPatientId || ''}&id=${id}`,
    );
  };
}
