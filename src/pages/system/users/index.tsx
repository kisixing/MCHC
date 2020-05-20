import React, { Fragment } from 'react';
import Table from './components/Table';
import Query from './components/Query';
import UsersModal from './components/UsersModal';
import { tableColumns } from './config/table';
import { processFromApi, toApi } from './config/adapter';
import { Popconfirm, Switch, Button, message } from 'antd';
import { get } from 'lodash';
import BaseList, { IState as BaseListIState } from '@/components/BaseList';
import request from '@/utils/request';
import { EditOutlined, DeleteOutlined, RedoOutlined } from '@ant-design/icons';
import commonStyles from '@/common.less';
import CustomSpin from '@/components/GeneralComponents/CustomSpin';
import ResetPasswordModal from './components/ResetPasswordModal';
import WithDynamicExport from '@/components/WithDynamicExport';

// interface IProps {}

// interface IState extends BaseListIState {
//   paramryKey?: string;
//   resetVisible?: boolean;
//   resetEditable?: boolean;
// }

@WithDynamicExport
export default class List extends BaseList {
  static defaultProps = {
    baseUrl: '/users',
    baseTitle: '用户',
    needPagination: true,
    showAdd: true,
    showQuery: true,
    rowKey: 'id',
    tableColumns,
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
    resetEditable: false,
    resetVisible: false,
    id: undefined,
    paramryKey: undefined,
    loading: true,
    processFromApi,
  };

  columns = [
    ...(this.props.tableColumns as Array<any>),
    {
      title: '活跃状态',
      dataIndex: 'activated',
      key: 'activated',
      align: 'center',
      render: (value: any, rowData: any) => {
        return <Switch defaultChecked={value} onChange={this.handleDisableUser(rowData)} />;
      },
    },
    {
      title: '操作',
      align: 'center',
      fixed: 'right',
      render: (value: any, rowData: any, index: any) => {
        return (
          <Fragment>
            <Button
              className={commonStyles.tableActionBtn}
              type="primary"
              size="small"
              onClick={this.handleEdit(rowData)}
            >
              <EditOutlined />
            </Button>
            <Button
              className={commonStyles.tableActionBtn}
              type="primary"
              size="small"
              onClick={this.handleResetEdit(rowData)}
            >
              <RedoOutlined />
            </Button>
            <Popconfirm
              title={`确定要删除这个${get(this.props, 'baseTitle')}吗?`}
              onConfirm={this.handleDelete(rowData)}
              okText="确定"
              cancelText="取消"
            >
              <Button className={commonStyles.tableActionBtn} type="danger" size="small">
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </Fragment>
        );
      },
    },
  ];

  handleEdit = (rowData: any) => () => {
    this.setState({
      visible: true,
      editable: true,
      id: get(rowData, 'id'),
      paramryKey: get(rowData, 'login'),
    });
  };

  handleResetCancel = () => {
    this.setState({
      resetVisible: false,
      resetEditable: false,
    });
  };

  handleResetEdit = (rowData: any) => () => {
    this.setState({
      resetVisible: true,
      resetEditable: true,
      id: get(rowData, 'id'),
      paramryKey: get(rowData, 'login'),
    });
  };

  handleDisableUser = (rowData: any) => async () => {
    const { baseUrl } = this.props;
    try {
      await request.put(baseUrl as string, {
        data: toApi({
          ...rowData,
          roles: get(rowData, 'roles'),
          activated: !get(rowData, 'activated'),
        }),
      });
      message.success('切换用户状态成功');
    } catch (error) {
      console.log(error);
    }

    this.handleSearch();
  };

  render() {
    const { baseTitle, rowKey, showAdd, needPagination, showQuery, Query } = this.props;
    const { dataSource, visible, editable, id, total, defaultQuery, loading, paramryKey, resetVisible } = this.state;

    return (
      <Fragment>
        {showQuery && <Query onSearch={this.handleQuerySearch} />}
        {loading ? (
          <CustomSpin />
        ) : (
          <Table
            pagination={
              needPagination && {
                total,
                showTotal: () => `一共${total}条记录`,
                pageSize: get(defaultQuery, 'size'),
                defaultCurrent: 1,
                onChange: this.handlePageChange,
              }
            }
            columns={this.columns}
            dataSource={dataSource}
            onAdd={showAdd && this.handleAdd}
            baseTitle={baseTitle}
            rowKey={rowKey}
          />
        )}
        {visible && (
          <UsersModal
            visible={visible}
            editable={editable}
            id={id}
            paramryKey={paramryKey}
            onCancel={this.handleCancel}
            onSearch={this.handleSearch}
          />
        )}
        {resetVisible && (
          <ResetPasswordModal
            visible={resetVisible}
            id={id}
            paramryKey={paramryKey}
            onCancel={this.handleResetCancel}
            onSearch={this.handleSearch}
          />
        )}
      </Fragment>
    );
  }
}
