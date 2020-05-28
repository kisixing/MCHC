import React from 'react';
import { Table } from 'antd';
import stylesCustomTable from './less/Table.less';
import { TableProps } from 'antd/lib/table';

interface IProps extends TableProps<any> {
  columns?: any;
}

export default class CustomTable extends React.PureComponent<IProps> {
  render() {
    return <Table className={stylesCustomTable.table} {...this.props} />;
  }
}
