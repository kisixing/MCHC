import React from 'react';
import PanelWithChild from '@/components/BaseEditPanel/PanelWithChild';
import PhysicalExam from '@/pages/premarital-care/public-exam/PhysicalExam';
import DiseaseHistory from '@/pages/premarital-care/public-exam/DiseaseHistory';
import GynecologicalExam from '@/pages/premarital-care/public-exam/GynecologicalExam';
import PremaritalExam from '@/pages/premarital-care/public-exam/PremaritalExam';
import PremaritalGuidance from '@/pages/premarital-care/public-exam/PremaritalGuidance';
import { Tabs, Divider } from 'antd';
import { get } from 'lodash';
import request from '@/utils/request';
import styles from '@/components/BaseEditPanel/index.less';

export default class panel extends PanelWithChild {
  constructor(props: any) {
    super(props);
    this.state = {
      data: {},
      activeKey: '',
    };
  }

  async componentDidMount() {
    const id = get(this.props, 'location.query.id');
    const data = await request.get(`/wives/${id}`);
    const activeKey = get(this.props, 'location.query.activeKey') || 'DiseaseHistory';
    this.setState({
      data,
      activeKey,
    });
  }

  handleChangeTab = async (activeKey: string) => {
    const id = get(this.props, 'location.query.id');
    const data = await request.get(`/wives/${id}`);
    this.setState({
      activeKey,
      data,
    });
  };

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
        {/* <Divider className={styles.panelWithChildHeaderDivider}></Divider> */}
      </>
    );
  };

  renderContent = () => {
    const id = get(this.props, 'location.query.id');
    const { data, activeKey } = this.state;
    return (
      <Tabs activeKey={activeKey} type="card" onChange={this.handleChangeTab}>
        <Tabs.TabPane tab="病史信息" key="DiseaseHistory">
          {activeKey === 'DiseaseHistory' && <DiseaseHistory baseUrl="wives" data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="体格检查" key="PhysicalExam">
          {activeKey === 'PhysicalExam' && <PhysicalExam type="wife" data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="实验室检查" key="PremaritalExam">
          {activeKey === 'PremaritalExam' && <PremaritalExam type="wife" data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="婚前指导" key="PremaritalGuidance">
          {activeKey === 'PremaritalGuidance' && <PremaritalGuidance type="wife" data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="妇科检查" key="GynecologicalExam">
          {activeKey === 'GynecologicalExam' && <GynecologicalExam type="wife" data={data} />}
        </Tabs.TabPane>
      </Tabs>
    );
  };
}
