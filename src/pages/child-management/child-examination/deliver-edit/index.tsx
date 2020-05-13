import React from 'react';
import PanelWithChild from '@/components/BaseEditPanel/PanelWithChild';
import { Tabs } from 'antd';
import { get } from 'lodash';
import request from '@/utils/request';

export default class panel extends PanelWithChild {
  state = {
    data: {},
  };

  async componentDidMount() {
    const id = get(this.props, 'location.query.id');
    const data = request.get(`/admissions/${id}`);
    this.setState({
      data,
    });
  }

  renderContent = () => {
    const id = get(this.props, 'location.query.id');
    const { data } = this.state;

    return (
      <Tabs defaultActiveKey="1" type="card" size="small">
        <Tabs.TabPane tab="病史询问" key="Admission">

        </Tabs.TabPane>
        <Tabs.TabPane tab="出生信息登记" key="LabourRecord">

        </Tabs.TabPane>
        <Tabs.TabPane tab="体格检查" key="NursingRecord">

        </Tabs.TabPane>
        <Tabs.TabPane tab="辅助检查" key="predelivery">

        </Tabs.TabPane>
        <Tabs.TabPane tab="高危儿登记" key="CaesareanDelivery">

        </Tabs.TabPane>
        <Tabs.TabPane tab="转诊登记" key="NeonateRecord">

        </Tabs.TabPane>
        <Tabs.TabPane tab="下次体检预约" key="PostpartumVisit">

        </Tabs.TabPane>
      </Tabs>
    );
  };
}
