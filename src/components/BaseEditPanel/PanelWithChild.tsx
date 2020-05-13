import React from 'react';
import styles from './index.less';
import { Divider } from 'antd';

export default class PanelWithChild extends React.Component {
  renderHeader = () => {
    return (
      <>
        <div className={styles.panelWithChildHeader}>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>就诊卡号:</span>
            <span className={styles.panelWithChildHeaderItemValue}>56215487</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>姓名:</span>
            <span className={styles.panelWithChildHeaderItemValue}>东方不败</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>年龄:</span>
            <span className={styles.panelWithChildHeaderItemValue}>29</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>孕周:</span>
            <span className={styles.panelWithChildHeaderItemValue}>30</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>孕产期</span>
            <span className={styles.panelWithChildHeaderItemValue}>2020-09-09</span>
          </div>
        </div>
        <Divider className={styles.panelWithChildHeaderDivider}></Divider>
      </>
    );
  };

  renderContent = () => {
    return <></>;
  };

  render() {
    return (
      <div className={styles.panelWithChild}>
        {this.renderHeader()}
        {this.renderContent()}
      </div>
    );
  }
}
