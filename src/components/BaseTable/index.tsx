import React, { Component } from 'react';
import { Button, Input, Space, InputNumber, Table } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { map, get, set } from 'lodash';
import { TableProps } from 'antd/lib/table';
import moment from 'moment';
import { FilterDropdownProps } from 'antd/lib/table/interface';

import styles from './index.less';

const TABLE_CELL_WIDTH = 200;

interface IProps extends TableProps<any> {
  onAdd?: () => void;
  baseTitle?: string;
}

interface IState {
  searchText?: string;
  searchedColumn?: string;
}

export default class BaseTable extends Component<IProps, IState> {
  state = {
    searchText: '',
    searchedColumn: '',
  };

  searchInput: any;

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
    return map(columns, (column: any) => {
      const { width, hiddenSorter, hiddenFilter } = column;
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
        width: width || TABLE_CELL_WIDTH,
      };
    });
  };

  renderTitle = () => {
    const { onAdd, baseTitle } = this.props;
    return (
      <div className={styles.title}>
        <span className={styles.titleName}>{baseTitle}列表</span>
        {onAdd && (
          <Button type="primary" icon={<PlusOutlined />} className={styles.titleAddBtn} onClick={onAdd}>
            添加{baseTitle}
          </Button>
        )}
      </div>
    );
  };

  render() {
    const { columns, ...rest } = this.props;

    const mergedColumns = this.mergedColumns(columns);
    return (
      <Table
        bordered
        size="small"
        {...rest}
        scroll={{ x: '~calc(100vw - 282px)' }}
        columns={mergedColumns}
        title={this.renderTitle}
        className={styles.table}
      />
    );
  }
}
