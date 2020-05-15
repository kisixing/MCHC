import React, { Component } from 'react';
import { Button, Input, Space, InputNumber, DatePicker, TimePicker, Popover } from 'antd';
import { map, get, set, isEmpty, isEqual, keyBy, keys, filter } from 'lodash';
import CustomTable from '@/layouts/CustomTable';
import styles from './index.less';
import { TableProps } from 'antd/lib/table';
import { SearchOutlined } from '@ant-design/icons';
import moment, { Moment } from 'moment';
import { FilterDropdownProps } from 'antd/lib/table/interface';
import CustomCols from './CustomCols';

const TABLE_CELL_WIDTH = 200;

interface IProps extends TableProps<any> {
  onAdd?: () => void;
  showColConfig?: boolean;
  baseTitle?: string;
}

interface IState {
  searchText?: string;
  searchedColumn?: string;
  columnsConfigVisible?: boolean;
  columns?: any[];
  checkedColumns?: any[];
}

export default class BaseTable extends Component<IProps, IState> {
  state = {
    searchText: '',
    searchedColumn: '',
    columns: [],
    checkedColumns: [],
    columnsConfigVisible: false,
  };

  searchInput: any;

  componentDidMount() {
    const { columns } = this.props;
    const newColumns = this.mergedColumns(columns);

    this.setState({
      columns: newColumns,
      checkedColumns: newColumns,
    });
  }

  handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters: any) => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleSorter = (column: any) => (rowDataPrev: any, rowDataNext: any) => {
    const { dataIndex, sortType = 'string' } = column;
    switch (sortType) {
      case 'number':
        return Number(get(rowDataPrev, dataIndex)) - Number(get(rowDataNext, dataIndex));
      case 'date':
        return moment(get(rowDataPrev, dataIndex)).diff(moment(get(rowDataNext, dataIndex)));
      case 'string':
      default:
        return String(get(rowDataPrev, dataIndex)).localeCompare(String(get(rowDataPrev, dataIndex)));
    }
  };

  handleFilter = (column: any) => (value: any, record: any) => {
    const { dataIndex } = column;
    // TODO: 过滤的时候，可能是 checkbox，待优化
    return String(record[dataIndex])
      .toLowerCase()
      .includes(String(value).toLowerCase());
  };

  renderInputNode = (filterType: string = 'string', column: any, filterDropdownProps: FilterDropdownProps) => {
    const { setSelectedKeys, selectedKeys, confirm, clearFilters } = filterDropdownProps;
    const { title, dataIndex } = column;
    const commonProps = {
      ref: (node: any) => {
        this.searchInput = node;
      },
      placeholder: `请输入${title}`,
      size: 'small',
      style: { width: 188, marginBottom: 8, display: 'block' },
      onPressEnter: () => this.handleSearch(selectedKeys, confirm, dataIndex),
    };

    switch (filterType) {
      case 'number':
        return (
          <InputNumber {...commonProps} onChange={inputNumber => setSelectedKeys(inputNumber ? [inputNumber] : [])} />
        );
      case 'string':
      default:
        return <Input {...commonProps} onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])} />;
    }
  };

  renderFilterDown = (column: any) => (filterDropdownProps: FilterDropdownProps) => {
    const { setSelectedKeys, selectedKeys, confirm, clearFilters } = filterDropdownProps;
    const { dataIndex, filterType = 'string', title } = column;

    return (
      <div style={{ padding: 8 }}>
        {this.renderInputNode(filterType, column, filterDropdownProps)}
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            查询
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            重置
          </Button>
        </Space>
      </div>
    );
  };

  mergedColumns = (columns: any) => {
    return map(columns, (column, index) => {
      const { width, hiddenSorter, hiddenFilter, align = 'center' } = column;
      if (!isEmpty(get(column, 'children'))) {
        const children = this.mergedColumns(get(column, 'children'));
        set(column, 'children', children);
      }

      const cellHeaderAction = {};
      if (!hiddenSorter) {
        set(cellHeaderAction, 'sorter', this.handleSorter(column));
      }
      if (!hiddenFilter) {
        set(cellHeaderAction, 'filterDropdown', this.renderFilterDown(column));
        set(cellHeaderAction, 'onFilter', this.handleFilter(column));
      }
      return {
        ...column,
        ...cellHeaderAction,
        align,
        key: get(column, 'dataIndex') || Math.random(),
        width: width || TABLE_CELL_WIDTH,
      };
    });
  };

  handleColumnsChange = (checkedColumns: any[]) => {
    this.setState({
      checkedColumns,
    });
  };

  handleColumnsConfigVisibleChange = (columnsConfigVisible: boolean) => {
    this.setState({
      columnsConfigVisible,
    });
  };

  renderColConfig = () => {
    const { columns, checkedColumns } = this.state;
    return (
      <CustomCols
        columns={columns}
        checkedColumns={checkedColumns}
        onColumnsChange={this.handleColumnsChange}
        onCancel={this.handleColumnsConfigVisibleChange}
      />
    );
  };

  renderTitle = () => {
    const { columnsConfigVisible } = this.state;
    const { onAdd, baseTitle, showColConfig = true } = this.props;
    return (
      <div className={styles.title}>
        <span className={styles.titleName}>{baseTitle}列表</span>
        <div className={styles.titleRight}>
          {onAdd && (
            <Button size="small" type="primary" className={styles.titleBtn} onClick={onAdd}>
              添加{baseTitle}
            </Button>
          )}
          {showColConfig && (
            <Popover
              content={this.renderColConfig}
              title="自定义列"
              trigger="click"
              visible={columnsConfigVisible}
              onVisibleChange={this.handleColumnsConfigVisibleChange}
              overlayClassName="customColsPopover"
              placement="bottomRight"
            >
              <Button size="small" type="default" className={styles.titleBtn}>
                自定义列
              </Button>
            </Popover>
          )}
        </div>
      </div>
    );
  };

  render() {
    const { checkedColumns } = this.state;

    return (
      <CustomTable {...this.props} title={this.renderTitle} bordered columns={checkedColumns} scroll={{ x: '100vw' }} />
    );
  }
}
