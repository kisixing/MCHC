import React from 'react';
import PanelWithChild from '@/components/BaseEditPanel/PanelWithChild';
import PhysicalExam from '../../public-exam/PhysicalExam';
import MaritalHistory from '../../public-exam/MaritalHistory';
import MenstrualHistory from '../../public-exam/MenstrualHistory';
import GynecologicalExam from '../../public-exam/GynecologicalExam';
import GynecologicalLabExam from '../../public-exam/GynecologicalLabExam';
import GynecologicalNote from '../../public-exam/GynecologicalNote';
import BasicInfo from '../../public-exam/BasicInfo';
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
    this.handleChangeTab('BasicInfo');
  }

  handleChangeTab = async (activeKey: string) => {
    const id = get(this.props, 'location.query.id');
    const data = await request.get(`/gynecological-visits/${id}`);
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
            <span className={styles.panelWithChildHeaderItemValue}>
              {get(data, 'gynecologicalPatient.outpatientNO')}
            </span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>证件号码:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'gynecologicalPatient.idNO')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>姓名:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'gynecologicalPatient.name')}</span>
          </div>
          <div className={styles.panelWithChildHeaderItem}>
            <span className={styles.panelWithChildHeaderItemLabel}>年龄:</span>
            <span className={styles.panelWithChildHeaderItemValue}>{get(data, 'gynecologicalPatient.age')}</span>
          </div>
        </div>
      </>
    );
  };

  renderContent = () => {
    const { data, activeKey } = this.state;
    return (
      <Tabs activeKey={activeKey} type="card" onChange={this.handleChangeTab}>
        <Tabs.TabPane tab="基本信息" key="BasicInfo">
          {activeKey === 'BasicInfo' && <BasicInfo data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="体格检查" key="PhysicalExam">
          {activeKey === 'PhysicalExam' && <PhysicalExam data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="实验室检查" key="GynecologicalLabExam">
          {activeKey === 'GynecologicalLabExam' && <GynecologicalLabExam data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="妇科检查" key="GynecologicalExam">
          {activeKey === 'GynecologicalExam' && <GynecologicalExam data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="妇科病史" key="GynecologicalNote">
          {activeKey === 'GynecologicalNote' && <GynecologicalNote data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="月经史" key="MenstrualHistory">
          {activeKey === 'MenstrualHistory' && <MenstrualHistory data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="婚育史" key="MaritalHistory">
          {activeKey === 'MaritalHistory' && <MaritalHistory data={data} />}
        </Tabs.TabPane>
      </Tabs>
    );
  };
}
