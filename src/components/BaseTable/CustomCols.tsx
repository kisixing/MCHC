import React, { useState, useEffect } from 'react';
import BaseTree from '../selects/TreeSelect';
import { Button } from 'antd';
import { get, keyBy, keys, filter } from 'lodash';
import styles from './index.less';

export default (props: any) => {
  const { columns, checkedColumns, onColumnsChange, onCancel } = props;
  const [checkedKeys, setCheckedKeys] = useState([] as any[]);

  useEffect(() => {
    setCheckedKeys(keys(keyBy(checkedColumns, 'key')));
  }, []);

  const handleColumnsChange = (callbackData: any) => {
    setCheckedKeys(get(callbackData, 'checkedKeys'));
  };

  const handleConfirmChange = (e: any) => {
    onColumnsChange(filter(columns, (column: any) => checkedKeys.indexOf(get(column, 'key')) > -1));
  };

  const handleCancel = () => {
    onCancel(false);
  };

  return (
    <div className={styles.customCols}>
      <BaseTree treeData={columns} checkedKeys={checkedKeys} onChange={handleColumnsChange} defaultExpandAll={false} />
      <div className={styles.customColsBottom}>
        <Button className={styles.customColsBottomBtn} size="small" type="primary" onClick={handleConfirmChange}>
          确认
        </Button>
        <Button className={styles.customColsBottomBtn} size="small" onClick={handleCancel}>
          取消
        </Button>
      </div>
    </div>
  );
};
