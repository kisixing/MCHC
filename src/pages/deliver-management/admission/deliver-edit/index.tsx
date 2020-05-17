import React from 'react';
import PanelWithChild from '@/components/BaseEditPanel/PanelWithChild';
import LabourRecord from '@/pages/deliver-management/labour-record/edit';
import Admission from '@/pages/deliver-management/admission/edit';
import CaesareanDelivery from '@/pages/deliver-management/caesarean-delivery/edit';
import NeonateRecord from '@/pages/deliver-management/neonate-record/edit-all';
import NursingRecord from '@/pages/deliver-management/nursing-record/list';
import PostpartumVisit from '@/pages/deliver-management/postpartum-visit/edit';
import Predelivery from '@/pages/deliver-management/predelivery/list';
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
    const data = await request.get(`/admissions/${id}`);
    this.setState({
      data,
    });
  }

  handleChangeTab = async (activeKey: string) => {
    const id = get(this.props, 'location.query.id');
    const data = await request.get(`/admissions/${id}`);

    this.setState({
      activeKey,
      data,
    });
  };

  renderContent = () => {
    const id = get(this.props, 'location.query.id');
    const { data, activeKey } = this.state;
    return (
      <Tabs activeKey={activeKey} type="card" size="small" onChange={this.handleChangeTab}>
        <Tabs.TabPane tab="基本信息" key="Admission">
          {activeKey === 'Admission' && <Admission id={id} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="分娩记录" key="LabourRecord">
          {activeKey === 'LabourRecord' && <LabourRecord id={get(data, 'labourRecord.id')} admissionId={id} />}{' '}
        </Tabs.TabPane>
        <Tabs.TabPane tab="护理记录" key="NursingRecord">
          {activeKey === 'NursingRecord' && <NursingRecord id={id} showAdd={true} admissionData={data} />}{' '}
        </Tabs.TabPane>
        <Tabs.TabPane tab="待产记录" key="predelivery">
          {activeKey === 'predelivery' && <Predelivery id={id} showAdd={true} admissionData={data} />}{' '}
        </Tabs.TabPane>
        <Tabs.TabPane tab="剖宫产记录" key="CaesareanDelivery">
          {activeKey === 'CaesareanDelivery' && (
            <CaesareanDelivery
              id={get(data, 'labourRecord.caesareanDelivery.id')}
              labourRecordId={get(data, 'labourRecord.id')}
            />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab="新生儿记录" key="NeonateRecord">
          {activeKey === 'NeonateRecord' && <NeonateRecord labourRecordId={get(data, 'labourRecord.id')} />}{' '}
        </Tabs.TabPane>
        {/* <Tabs.TabPane tab="产后访视" key="PostpartumVisit">
          <PostpartumVisit id={id} />
        </Tabs.TabPane> */}
      </Tabs>
    );
  };
}
