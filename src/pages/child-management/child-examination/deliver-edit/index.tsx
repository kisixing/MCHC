import React from 'react';
import PanelWithChild from '@/components/BaseEditPanel/PanelWithChild';
import BirthInformation from '../birth-information';
import InfectedHistory from '../infected-history';
import AuxiliaryExamination from '../auxiliary-examination';
import PhysicalExamination from '../physical-examination';
import GeneralExamination from '../general-examination';

import { Tabs, Divider } from 'antd';
import { get } from 'lodash';
import request from '@/utils/request';

import headerStyles from '@/components/BaseEditPanel/index.less';

export default class panel extends PanelWithChild {
  state = {
    activeKey: get(this.props, 'location.query.activeKey') || 'PhysicalExamination',
    data: {},
  };

  async componentDidMount() {
    const { id } = get(this.props, 'location.query');
    const data = await request.get(`/child-exam-visits/${id}`);
    this.setState({ data });
  }

  handleChangeTab = async (activeKey: string) => {
    const { id } = get(this.props, 'location.query');
    const data = await request.get(`/child-exam-visits/${id}`);
    this.setState({
      data,
      activeKey,
    });
  };

  renderHeader = () => {
    const id = get(this.props, 'location.query.id');
    const { data } = this.state;

    return (
      <>
        <div className={headerStyles.panelWithChildHeader}>
          <div className={headerStyles.panelWithChildHeaderItem}>
            <span className={headerStyles.panelWithChildHeaderItemLabel}>姓名:</span>
            <span className={headerStyles.panelWithChildHeaderItemValue}>
              {get(data, 'childArchives.name')}
            </span>
          </div>
          <div className={headerStyles.panelWithChildHeaderItem}>
            <span className={headerStyles.panelWithChildHeaderItemLabel}>年龄:</span>
            <span className={headerStyles.panelWithChildHeaderItemValue}>
              {get(data, 'childArchives.age')}
            </span>
          </div>
        </div>
        {/* <Divider className={headerStyles.panelWithChildHeaderDivider}></Divider> */}
      </>
    );
  }

  renderContent = () => {
    const id = get(this.props, 'location.query.id');
    const { data, activeKey } = this.state;
    return (
      <Tabs defaultActiveKey={activeKey} type="card" size="small" onChange={this.handleChangeTab}>
        {/* <Tabs.TabPane tab="出生信息登记" key="BirthInformation">
          {activeKey === 'BirthInformation' && <BirthInformation data={data} />}
        </Tabs.TabPane> */}
        
        <Tabs.TabPane tab="体格检查" key="PhysicalExamination">
          {activeKey === 'PhysicalExamination' && data.id && <PhysicalExamination id={id} data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="内科检查" key="GeneralExamination">
          {activeKey === 'GeneralExamination' && <GeneralExamination id={id} data={data}/>}
        </Tabs.TabPane>
        <Tabs.TabPane tab="辅助检查" key="AuxiliaryExamination">
          {activeKey === 'AuxiliaryExamination' && <AuxiliaryExamination id={id} data={data} />}
        </Tabs.TabPane>
        <Tabs.TabPane tab="传染病史" key="InfectedHistory">
          {activeKey === 'InfectedHistory' && <InfectedHistory id={id} data={data} />}
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
