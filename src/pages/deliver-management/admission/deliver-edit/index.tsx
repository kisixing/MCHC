import React from 'react';
import PanelWithChild from '@/components/BaseEditPanel/PanelWithChild';
import LabourRecord from '@/pages/deliver-management/labour-record/edit';
import Admission from '@/pages/deliver-management/admission/edit';
import CaesareanDelivery from '@/pages/deliver-management/caesarean-delivery/edit';
import NeonateRecord from '@/pages/deliver-management/neonate-record/edit';
import NursingRecord from '@/pages/deliver-management/nursing-record/list';
import PostpartumVisit from '@/pages/deliver-management/postpartum-visit/edit';
import Predelivery from '@/pages/deliver-management/predelivery/edit';
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
        <Tabs.TabPane tab="基本信息" key="Admission">
          <Admission id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="分娩记录" key="LabourRecord">
          <LabourRecord id={get(data, 'labourRecord.id')} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="护理记录" key="NursingRecord">
          <NursingRecord id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="待产记录" key="predelivery">
          <Predelivery id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="剖宫产记录" key="CaesareanDelivery">
          <CaesareanDelivery id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="新生儿记录" key="NeonateRecord">
          <NeonateRecord id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="产后访视" key="PostpartumVisit">
          <PostpartumVisit id={id} />
        </Tabs.TabPane>
      </Tabs>
    );
  };
}
