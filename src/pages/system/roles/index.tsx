import React, { Fragment } from 'react';
import RoleTable from './components/RoleTable';
import RolesModal from './components/RolesModal';
import { tableColumns } from './config/table';
import { Popconfirm, Button, Row, Col, message } from 'antd';
import { get } from 'lodash';
import { processFromApi, toApi } from './config/adapter';
import BaseList, { IState as BaseListIState } from '@/components/BaseList';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import commonStyles from '@/common.less';
import CustomSpin from '@/components/GeneralComponents/CustomSpin';
import request from '@/utils/request';
import MenuPermissionCard from './components/MenuPermissionCard';
import ApiPermissionCard from './components/ApiPermissionCard';
import WithDynamicExport from '@/components/WithDynamicExport';

interface IProps {}

interface IState extends BaseListIState {
  menuDataSource?: any[];
  defaultCheckedMenu?: any[];
  activeRole?: object;
}

@WithDynamicExport
export default class Roles extends BaseList<IProps, IState> {
  static defaultProps = {
    baseUrl: '/groups',
    baseTitle: '角色',
    needPagination: false,
    showQuery: false,
    tableColumns,
    rowKey: 'id',
    showAdd: false,
  };

  state = {
    dataSource: [],
    menuDataSource: [],
    visible: false,
    editable: false,
    id: undefined,
    loading: true,
    defaultCheckedMenu: [],
    activeRole: {},
  };

  roleColumns = [
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
              
              onClick={this.handleEdit(rowData)}
            >
              <EditOutlined />
            </Button>
            <Popconfirm
              title={`确定要删除这个${get(this.state, 'baseTitle')}吗?`}
              onConfirm={this.handleDelete(rowData)}
              okText="确定"
              cancelText="取消"
            >
              <Button className={commonStyles.tableActionBtn} type="danger" >
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </Fragment>
        );
      },
    },
  ];

  handleSearch = async () => {
    const { baseUrl, needPagination } = this.props;
    const dataSource = processFromApi(await request.get(baseUrl as string));
    let total = 0;
    if (needPagination) {
      total = await request.get(`${baseUrl}/count`);
    }
    this.setState({ dataSource, total, loading: false });
  };

  handleRowClick = (rowData: any) => (e: any) => {
    this.setState({
      defaultCheckedMenu: get(rowData, 'permissions'),
      activeRole: rowData,
    });
  };

  setRowClassName = (rowData: any) => {
    const { activeRole } = this.state;
    if (get(rowData, 'id') === get(activeRole, 'id')) {
      return 'table-row-active';
    }
    return '';
  };

  handleSaveApiPermission = async (checkedData: any[]) => {
    const { activeRole } = this.state;
    const { baseUrl } = this.props;
    try {
      await request.put(baseUrl as string, {
        data: toApi({ ...activeRole, authorities: checkedData }),
      });
      message.success('保存 API 权限成功');
      await this.handleSearch();
    } catch (error) {
      console.log(error);
    }
  };

  handleSaveMenuPermission = async (checkedData: any[]) => {
    const { activeRole } = this.state;
    const { baseUrl } = this.props;
    try {
      await request.put(baseUrl as string, {
        data: toApi({ ...activeRole, permissions: checkedData }),
      });
      message.success('保存菜单/权限成功');
      await this.handleSearch();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { baseTitle } = this.props;
    const { dataSource, visible, editable, id, loading, activeRole } = this.state;

    return (
      <Fragment>
        {loading ? (
          <CustomSpin />
        ) : (
          <Row>
            <Col span={13}>
              <RoleTable
                columns={this.roleColumns}
                dataSource={dataSource}
                onAdd={this.handleAdd}
                pagination={false}
                rowClassName={this.setRowClassName}
                onRow={(record: any) => {
                  return {
                    onClick: this.handleRowClick(record),
                  };
                }}
                baseTitle={baseTitle}
                scroll={{}}
              />
            </Col>
            <Col span={4} offset={1}>
              <MenuPermissionCard
                key={get(activeRole, 'id')}
                role={activeRole}
                onSaveMenuPermission={this.handleSaveMenuPermission}
              />
            </Col>
            <Col span={5} offset={1}>
              <ApiPermissionCard
                key={get(activeRole, 'id')}
                role={activeRole}
                onSaveApiPermission={this.handleSaveApiPermission}
              />
            </Col>
          </Row>
        )}
        {visible && (
          <RolesModal
            visible={visible}
            editable={editable}
            id={id}
            onCancel={this.handleCancel}
            onSearch={this.handleSearch}
          />
        )}
      </Fragment>
    );
  }
}
