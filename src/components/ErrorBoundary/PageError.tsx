import React from 'react';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.pageError}>
      <h3>页面发生未知错误，请刷新后重试</h3>
    </div>
  );
};
