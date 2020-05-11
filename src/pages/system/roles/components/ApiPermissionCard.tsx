import React from 'react';
import { Button } from 'antd';
import { get, isEmpty } from 'lodash';
import ApiPermissionSelect from '@/components/selects/ApiPermissionSelect';
import styles from './index.less';

interface IProps {
  onSaveApiPermission?: (value: any[]) => void;
  role?: any;
}

export default class MenuPermissionCard extends React.PureComponent<IProps> {
  state = {
    checkedData: [],
  };

  handleSaveApiPermission = () => {
    const { onSaveApiPermission } = this.props;
    const { checkedData } = this.state;
    if (!isEmpty(checkedData)) {
      onSaveApiPermission && onSaveApiPermission(checkedData);
    }
  };

  handleChange = (checkedData: any[]) => {
    this.setState({
      checkedData,
    });
  };

  render() {
    const { role } = this.props;

    return (
      <div className={styles.menuPermissionCard}>
        <div className={styles.menuPermissionCardHeader}>
          <div>API权限</div>
          <Button type="primary" size="small" onClick={this.handleSaveApiPermission} disabled={isEmpty(role)}>
            保存
          </Button>
        </div>
        <div>
          <ApiPermissionSelect value={get(role, 'authorities')} disabled={isEmpty(role)} onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}
