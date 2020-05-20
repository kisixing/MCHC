import React, { Fragment } from 'react';
import request from '@/utils/request';
import { get, isFunction, map, keyBy, set, isNil, isEmpty } from 'lodash';
import { message, Popconfirm, Button, Form, Input } from 'antd';
import queryString from 'query-string';
import CustomSpin from '../GeneralComponents/CustomSpin';
import commonStyles from '@/common.less';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import BaseTable from '@/components/BaseTable';
import { FormInstance } from 'antd/lib/form';
import BaseFormComponent from '../BaseFormComponent';
import moment, { isMoment } from 'moment';
import { formatTimeToUTC } from '@/utils/format';

export interface IProps {
  // 接口 URL
  baseUrl: string;
  // 唯一 key，通常取 id
  rowKey: string;
  // 左上角标题
  baseTitle: string;
  // 列表配置
  tableColumns: any[];
  // Table 组件
  Table: any;
  // 是否需要分页
  needPagination?: boolean;
  // 表格是否可编辑
  needEditInTable?: boolean;
  // 展示添加按钮
  showAdd?: boolean;
  // 当 BaseList 作为子组件的时候，可能需要使用，参考 nursing-record
  asChildComponentQueryLabel?: string;
  // 展示搜索功能，如果为 true，则必须传 Query 组件
  showQuery?: boolean;
  // 传入的 ID
  id?: boolean;
  // 从接口获取数据，过滤函数
  processFromApi?: (data: object[]) => object[];
  toApi?: (data: object) => object;
  // 其它表格属性
  otherTableProps?: any;
  // 弹窗表单
  ModalForm?: any;
  // 搜索组件
  Query?: any;
}

export interface IState {
  total: number;
  dataSource: any[];
  defaultQuery: object;
  visible: boolean;
  editable: boolean;
  loading: boolean;
  id: any;
  editKey: any;
}

export default class BaseList extends React.Component<IProps, IState> {
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
    editKey: undefined,
    loading: true,
  };

  columns = [
    ...(this.props.tableColumns as Array<any>),
    {
      title: '操作',
      dataIndex: 'operation',
      fixed: 'right',
      hiddenSorter: true,
      hiddenFilter: true,
      render: (value: any, rowData: any, index: number) => {
        const { needEditInTable } = this.props;
        const editable = this.isEditing(rowData);
        if (needEditInTable && editable) {
          return (
            <>
              <Button className={commonStyles.tableActionBtn} size="small" onClick={this.handleItemSave(rowData)}>
                保存
              </Button>
              <Button className={commonStyles.tableActionBtn} size="small" onClick={this.handleItemCancel(rowData)}>
                取消
              </Button>
            </>
          );
        }

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

  form: FormInstance | null = null;

  componentDidMount() {
    this.handleSearch();
  }

  isEditing = (rowData: any) => (get(rowData, 'editKey') || get(rowData, 'id')) === this.state.editKey;

  handleDelete = (rowData: any) => async () => {
    const { baseUrl, baseTitle } = this.props;
    await request.delete(`${baseUrl}/${get(rowData, 'id')}`);
    message.success(`删除${baseTitle}成功`);
    this.handleSearch();
  };

  handleItemSave = (rowData: any) => async () => {
    const { baseUrl, baseTitle, toApi, needEditInTable, showAdd } = this.props;
    const { id } = this.state;
    const form = this.form as FormInstance;
    const formData = form.getFieldsValue();
    map(formData, (data, key) => {
      if (isMoment(data)) {
        formData[key] = formatTimeToUTC(data);
      }
    });
    let method = 'put';
    let title = `编辑${baseTitle}成功`;
    if (!id && showAdd && needEditInTable) {
      method = 'post';
      title = `新增${baseTitle}成功`;
    }
    await request[method](baseUrl, {
      data: isFunction(toApi)
        ? toApi({
            ...rowData,
            ...formData,
          })
        : {
            ...rowData,
            ...formData,
          },
    });
    form.resetFields();
    this.setState({
      id: undefined,
      editKey: undefined,
    });
    message.success(title);
    await this.handleSearch();
  };

  handleItemCancel = (rowData: any) => () => {
    this.setState({
      id: undefined,
    });
  };

  handleEdit = (rowData: any) => () => {
    const { needEditInTable, tableColumns } = this.props;
    if (needEditInTable) {
      const form = this.form as FormInstance;
      // TODO: 通过 tableColumns 判断字段是否为时间格式，如果是，需要转换为 moment。(是否可以优化？)
      map(rowData, (item, dataIndex) => {
        const inputType = get(keyBy(tableColumns, 'dataIndex'), `${dataIndex}.inputType`);
        if (['single_date_picker', 'single_time_picker'].indexOf(inputType) > -1) {
          set(rowData, dataIndex, moment(item));
        }
      });
      form.setFieldsValue(rowData);
      this.setState({
        id: get(rowData, 'id'),
        editKey: get(rowData, 'editKey') || get(rowData, 'id'),
      });
    } else {
      this.setState({
        visible: true,
        editable: true,
        id: get(rowData, 'id'),
      });
    }
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

  // 查询组件，点击查询，由于 api 采用接口 Criteria 风格，子组件可能需要重写 handleQuerySearch
  handleQuerySearch = (data: object) => {
    let queryData = {};
    map(data, (value: any, key: any) => {
      if (!isNil(value) && !isEmpty(value)) {
        queryData = {
          ...queryData,
          [`${key}.contains`]: value,
        };
      }
    });
    this.handleSearch(queryData);
  };

  handleSearch = async (queryParams: any = {}) => {
    const { baseUrl, needPagination, processFromApi, asChildComponentQueryLabel = '', id: propsId } = this.props;
    const { defaultQuery } = this.state;
    // TODO: 有可能作为页面的子组件， propsId 是 BaseList 作为子组件从 props 传入的
    const query = propsId
      ? {
          ...defaultQuery,
          [asChildComponentQueryLabel]: propsId,
          ...queryParams,
        }
      : {
          ...defaultQuery,
          ...queryParams,
        };
    const dataSource = isFunction(processFromApi)
      ? processFromApi(await request.get(`${baseUrl}${query ? `?${queryString.stringify(query as object)}` : ''}`))
      : await request.get(`${baseUrl}${query ? `?${queryString.stringify(query as object)}` : ''}`);
    let total = 0;
    if (needPagination) {
      total = await request.get(`${baseUrl}/count`);
    }
    this.setState({ dataSource, total, loading: false });
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

  getColumns = () => {
    return map(this.columns, col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (rowData: any) => {
          return {
            record: rowData,
            inputType: col.inputType,
            inputProps: col.inputProps,
            dataIndex: col.dataIndex,
            title: col.title,
            editing: this.isEditing(rowData),
          };
        },
      };
    });
  };

  renderEditableCell = (cell: any) => {
    const {
      editing,
      dataIndex,
      title,
      inputType = 'input',
      inputProps,
      rules,
      record,
      index,
      children,
      inputConfig,
      ...restProps
    } = cell;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={rules}
          >
            <BaseFormComponent {...inputProps} inputType={inputType} config={inputConfig} />
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    const {
      baseTitle,
      needPagination,
      rowKey,
      Query,
      Table = BaseTable,
      showQuery,
      showAdd,
      otherTableProps,
      ModalForm,
      needEditInTable,
    } = this.props;
    const { dataSource, total, defaultQuery, loading, visible, editable, id } = this.state;
    const mergedColumns = this.getColumns();
    return (
      <>
        {showQuery && <Query onSearch={this.handleQuerySearch} />}
        {loading ? (
          <CustomSpin />
        ) : (
          <Form
            ref={formRef => {
              this.form = formRef;
            }}
            component={false}
          >
            <Table
              {...otherTableProps}
              loading={loading}
              pagination={
                needPagination && {
                  total,
                  showTotal: () => `一共${total}条记录`,
                  pageSize: get(defaultQuery, 'size'),
                  defaultCurrent: 1,
                  onChange: this.handlePageChange,
                }
              }
              components={
                needEditInTable
                  ? {
                      body: {
                        cell: this.renderEditableCell,
                      },
                    }
                  : {}
              }
              columns={mergedColumns}
              dataSource={dataSource}
              onAdd={showAdd && this.handleAdd}
              baseTitle={baseTitle}
              rowKey={rowKey}
            />
          </Form>
        )}
        {visible && (
          <ModalForm
            visible={visible}
            editable={editable}
            id={id}
            onCancel={this.handleCancel}
            onSearch={this.handleSearch}
          />
        )}
      </>
    );
  }
}
