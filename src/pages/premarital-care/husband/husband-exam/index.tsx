import React from 'react';
import PanelWithChild from '@/components/BaseEditPanel/PanelWithChild';
import PhysicalExam from '@/pages/premarital-care/husband/husband-exam/PhysicalExam';
import AndrologyExam from '@/pages/premarital-care/husband/husband-exam/AndrologyExam';
import GynecologicalExam from '@/pages/premarital-care/husband/husband-exam/GynecologicalExam';
import PremaritalExam from '@/pages/premarital-care/husband/husband-exam/PremaritalExam';
import PremaritalGuidance from '@/pages/premarital-care/husband/husband-exam/PremaritalGuidance';
import { Tabs } from 'antd';
import { get } from 'lodash';
import request from '@/utils/request';

export default class panel extends PanelWithChild {
  constructor(props: any) {
    super(props);
    const activeKey = get(props, 'location.query.activeKey') || 'Admission';
    this.state = {
      data: {},
      activeKey,
    };
  }

  async componentDidMount() {
    const id = get(this.props, 'location.query.id');
    const data = await request.get(`/husbands/${id}`);
    this.setState({
      data,
    });
  }

  handleChangeTab = (activeKey: string) => {
    this.setState({
      activeKey,
    });
  };

  renderContent = () => {
    const id = get(this.props, 'location.query.id');
    const { data, activeKey } = this.state;
    return (
      <Tabs activeKey={activeKey} type="card" size="small" onChange={this.handleChangeTab}>
        <Tabs.TabPane tab="病史信息" key="Admission">
          {activeKey === 'Admission' && <div>暂无内容</div>}
        </Tabs.TabPane>
        <Tabs.TabPane tab="体格检查" key="PhysicalExam">
          {activeKey === 'PhysicalExam' && <PhysicalExam />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="实验室检查" key="PremaritalExam">
          {activeKey === 'PremaritalExam' && <PremaritalExam />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="婚前指导" key="PremaritalGuidance">
          {activeKey === 'PremaritalGuidance' && <PremaritalGuidance />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="生殖器官与第二性征检查" key="AndrologyExam">
          {activeKey === 'AndrologyExam' && <AndrologyExam />}
        </Tabs.TabPane>
      </Tabs>
    );
  };
}
