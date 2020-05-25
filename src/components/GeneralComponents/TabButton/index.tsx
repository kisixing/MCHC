import React, { useRef } from 'react';
import classnames from 'classnames';
import { CloseOutlined } from '@ant-design/icons';

import styles from './index.less';

interface IProps {
  isActive?: boolean;
  title: string;
  tabKey: string;
  closable?: boolean;
  onClick?: any;
  onClose?: any;
}

export default (props: IProps) => {
  const { isActive = false, closable = true, title, onClick, onClose, tabKey } = props;

  const handleClickTab = () => {
    onClick && onClick(tabKey);
  };

  const handleCloseTab = (e: any) => {
    e.stopPropagation();
    onClose && onClose(tabKey);
  };

  const iconStyle = isActive ? { backgroundColor: '#1890ff' } : {};

  return (
    <div
      id={tabKey}
      // eslint-disable-next-line no-return-assign
      className={classnames({
        [styles.customTabsButton]: true,
        [styles.isActive]: isActive,
      })}
      onClick={handleClickTab}
    >
      <div className={styles.customTabsButtonIcon} style={iconStyle} />
      <div className={styles.customTabsButtonTitle}>{title}</div>
      {closable && (
        <div onClick={handleCloseTab} className={styles.customTabsButtonClose}>
          <CloseOutlined />
        </div>
      )}
    </div>
  );
};
