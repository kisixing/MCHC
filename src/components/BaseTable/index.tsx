import React, { Component } from 'react';
import { Button } from 'antd';
import CustomTable from '@/layouts/CustomTable';
import styles from './index.less';
import { TableProps } from 'antd/lib/table';

interface IProps extends TableProps<any> {
  onAdd?: () => void;
  baseTitle?: string;
}

interface IState {}

export default class BaseTable extends Component<IProps, IState> {
  renderTitle = () => {
    const { onAdd, baseTitle } = this.props;
    return (
      <div className={styles.title}>
        <span className={styles.titleName}>{baseTitle}列表</span>
        {onAdd && (
          <Button size="small" type="primary" className={styles.titleAddBtn} onClick={onAdd}>
            添加{baseTitle}
          </Button>
        )}
      </div>
    );
  };

  render() {
    return <CustomTable title={this.renderTitle} bordered {...this.props} />;
  }
}
