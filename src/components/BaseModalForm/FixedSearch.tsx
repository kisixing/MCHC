import React from 'react';
import { Input } from 'antd';
import styles from './index.less';

export default (props: any) => {
  return (
    <div className={styles.fixedSearch}>
      <Input size="small" />
    </div>
  );
};
