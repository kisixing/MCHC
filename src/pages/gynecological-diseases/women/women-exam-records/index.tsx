import React from 'react';
import WithDynamicExport from '@/components/WithDynamicExport';
import WomenExamRecordsList from './List';
import { get } from 'lodash';
import PanelWithChild from '@/components/BaseEditPanel/PanelWithChild';
import styles from '@/components/BaseEditPanel/index.less';
import request from '@/utils/request';

@WithDynamicExport
export default class List extends PanelWithChild {
  state = {
    data: {},
  };

  async componentDidMount() {
    const id = get(this.props, 'location.query.id');
    const data = await request.get(`/gynecological-patients/${id}`);
    this.setState({
      data,
    });
  }

  renderHeader = () => {
    const { data } = this.state;
    return (
      <>
        <div className={styles.panelWithChildHeader}>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>门诊号:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'outpatientNO')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>证件号码:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'idNO')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>姓名:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'name')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>年龄:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'age')}</span>
          </div>
        </div>
      </>
    );
  };

  renderContent = () => {
    const id = get(this.props, 'location.query.id');

    return <WomenExamRecordsList asChildComponentQueryLabel="gynecologicalPatientId.equals" id={id} />;
  };
}
