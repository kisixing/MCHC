import React, { Fragment } from 'react';
import request from '@/utils/request';
import { get, isFunction } from 'lodash';
import { message, Popconfirm, Button } from 'antd';
import queryString from 'query-string';
import CustomSpin from '../GeneralComponents/CustomSpin';
import commonStyles from '@/common.less';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

interface IProps {
  baseUrl?: string;
  rowKey?: string;
  baseTitle?: string;
  needPagination?: boolean;
  showQuery?: boolean;
  tableColumns?: any[];
  processFromApi?: (data: object) => object;
  Table?: any;
  Query?: any;
}

interface IState {
  total?: number;
  needPagination?: boolean;
  defaultQuery?: object;
  dataSource?: any[];
  visible?: boolean;
  editable?: boolean;
  id?: any;
  showQuery?: boolean;
  loding?: boolean;
  baseUrl?: string;
  baseTitle?: string;
  processFromApi?: any;
}

export default class BaseList<P extends IProps = {}, S extends IState = {}> extends React.Component<
  IProps & P,
  IState & S
> {
  columns = [
    ...(this.props.tableColumns as Array<any>),
    {
      title: '操作',
      align: 'center',
      render: (value: any, rowData: any, index: number) => {
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

  componentDidMount() {
    this.handleSearch();
  }

  handleDelete = (rowData: any) => async () => {
    const { baseUrl, baseTitle } = this.props;
    await request.delete(`${baseUrl}/${get(rowData, 'id')}`);
    message.success(`删除${baseTitle}成功`);
    this.handleSearch();
  };

  handleEdit = (rowData: any) => () => {
    this.setState({
      visible: true,
      editable: true,
      id: get(rowData, 'id'),
    });
  };

  handleAdd = () => {
    this.setState({
      visible: true,
      editable: true,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      editable: false,
      id: undefined,
    });
  };

  handleSearch = async () => {
    const { baseUrl, needPagination, processFromApi } = this.props;
    const { defaultQuery } = this.state;
    const dataSource = isFunction(processFromApi)
      ? processFromApi(
          await request.get(`${baseUrl}${defaultQuery ? `?${queryString.stringify(defaultQuery as object)}` : ''}`),
        )
      : await request.get(`${baseUrl}${defaultQuery ? `?${queryString.stringify(defaultQuery as object)}` : ''}`);
    let total = 0;
    if (needPagination) {
      total = await request.get(`${baseUrl}/count?criteria`);
    }
    this.setState({ dataSource, total, loding: false });
  };

  handlePageChange = (page: number, pageSize: number) => {
    this.setState(
      {
        defaultQuery: {
          page: page - 1,
          size: pageSize,
        },
      },
      () => {
        this.handleSearch();
      },
    );
  };

  render() {
    const { baseTitle, needPagination, rowKey, Query, Table, showQuery } = this.props;
    const { dataSource, total, defaultQuery, loding } = this.state;

    return (
      <Fragment>
        {showQuery && <Query onSearch={this.handleSearch} />}
        {loding ? (
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
            onAdd={this.handleAdd}
            baseTitle={baseTitle}
            rowKey={rowKey}
          />
        )}
      </Fragment>
    );
  }
}
