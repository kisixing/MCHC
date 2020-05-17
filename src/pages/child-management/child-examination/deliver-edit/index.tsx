import React from 'react';
import PanelWithChild from '@/components/BaseEditPanel/PanelWithChild';
import BirthInformation from '../birth-information';
import InfectedHistory from '../infected-history';
import AuxiliaryExamination from '../auxiliary-examination';
import PhysicalExamination from '../physical-examination';
import GeneralExamination from '../general-examination';

import { Tabs } from 'antd';
import { get } from 'lodash';
import request from '@/utils/request';

export default class panel extends PanelWithChild {
  state = {
    data: {},
  };

  async componentDidMount() {
    const id = get(this.props, 'location.query.id');
    const data = request.get(`/child-exam-visits/${id}`);
    this.setState({
      data,
    });
  }

  renderContent = () => {
    const id = get(this.props, 'location.query.id');
    const { data } = this.state;

    return (
      <Tabs defaultActiveKey="1" type="card" size="small">
        <Tabs.TabPane tab="出生信息登记" key="birth-information">
          <BirthInformation />
        </Tabs.TabPane>
        <Tabs.TabPane tab="传染病史" key="infected-history">
          <InfectedHistory />
        </Tabs.TabPane>
        <Tabs.TabPane tab="体格检查" key="physical-examination">
          <PhysicalExamination />
        </Tabs.TabPane>
        <Tabs.TabPane tab="内科检查" key="general-examination">
          <GeneralExamination />
        </Tabs.TabPane>
        <Tabs.TabPane tab="辅助检查" key="auxiliary-examination">
          <AuxiliaryExamination />
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
