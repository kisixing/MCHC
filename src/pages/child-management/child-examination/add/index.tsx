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

export default class Addpanel extends PanelWithChild {
  state = {
    headerData: {},
    data: {},
  };

  async componentDidMount() {
    const childId = get(this.props, 'location.query.childId');
    const data = await request.get(`/child-archives/${childId}`);;
    this.setState({
      data,
    });
  }

  renderHeader = () => {
    const { data } = this.state;
    return (
      <>
        <div className={headerStyles.panelWithChildHeader}>
          <div className={headerStyles.panelWithChildHeaderItem}>
            <span className={headerStyles.panelWithChildHeaderItemLabel}>姓名:</span>
            <span className={headerStyles.panelWithChildHeaderItemValue}>
              {get(data, 'name')}
            </span>
          </div>
          <div className={headerStyles.panelWithChildHeaderItem}>
            <span className={headerStyles.panelWithChildHeaderItemLabel}>年龄:</span>
            <span className={headerStyles.panelWithChildHeaderItemValue}>
              {get(data, 'age')}
            </span>
          </div>
        </div>
        <Divider className={headerStyles.panelWithChildHeaderDivider}></Divider>
      </>
    );
  }

  renderContent = () => {
    const id = get(this.props, 'location.query.id');
    const { data, activeKey } = this.state;

    return (
      <Tabs defaultActiveKey="1" type="card" size="small">
        <Tabs.TabPane tab="出生信息登记" key="birth-information">
          <BirthInformation id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="传染病史" key="infected-history">
          <InfectedHistory id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="体格检查" key="physical-examination">
          <PhysicalExamination id={id} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="内科检查" key="general-examination">
          <GeneralExamination id={id}/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="辅助检查" key="auxiliary-examination">
          <AuxiliaryExamination id={id} />
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
