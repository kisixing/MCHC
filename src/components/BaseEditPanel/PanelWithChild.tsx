import React from 'react';
import styles from './index.less';
import { Divider } from 'antd';
import { get } from 'lodash';

export default class PanelWithChild extends React.Component {
  renderHeader = () => {
    const { data } = this.state;
    return (
      <>
        <div className={styles.panelWithChildHeader}>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>证件号码:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'idNO')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>门诊号:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'outpatientNO')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>住院号:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'inpatientNO')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>产检编号:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'checkupNO')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>姓名:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'name')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>年龄:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'age')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>孕周:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'gestationalWeek')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>孕产期</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'edd')}</span>
          </div>
        </div>
        {/* <Divider className={styles.panelWithChildHeaderDivider}></Divider> */}
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
