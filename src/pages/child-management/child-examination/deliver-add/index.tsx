import React from 'react';
import moment from 'moment';
import PanelWithChild from '@/components/BaseEditPanel/PanelWithChild';
import BirthInformation from '../birth-information';
import InfectedHistory from '../infected-history';
import AuxiliaryExamination from '../auxiliary-examination';
import PhysicalExamination from '../physical-examination';
import GeneralExamination from '../general-examination';
import HighRiskInfant from '../high-risk-infant';

import { Tabs, Divider } from 'antd';
import { get } from 'lodash';
import request from '@/utils/request';

import headerStyles from '@/components/BaseEditPanel/index.less';

export default class Addpanel extends PanelWithChild {
  state = {
    activeKey: get(this.props, 'location.query.activeKey') || 'PhysicalExamination',
    childArchives: {},
    data: {},
    id: null,
  };

  async componentDidMount() {
    const childId = get(this.props, 'location.query.childId');
    const data = await request.get(`/child-archives/${childId}`);
    this.setState({
      childArchives: data,
    });
  }

  handleChangeTab = async (activeKey: string) => {
    const { id } = this.state;
    let data = {};
    if (id) {
      data = await request.get(`/child-exam-visits/${id}`);
    }
    this.setState({
      data,
      activeKey,
    });
  };

  setID = (id: string) => {
    this.setState({ id });
  };

  renderHeader = () => {
    const data = this.state.childArchives;
    return (
      <>
        <div className={headerStyles.panelWithChildHeader}>
          <div className={headerStyles.panelWithChildHeaderItem}>
            <span className={headerStyles.panelWithChildHeaderItemLabel}>姓名:</span>
            <span className={headerStyles.panelWithChildHeaderItemValue}>{get(data, 'name')}</span>
          </div>
          <div className={headerStyles.panelWithChildHeaderItem}>
            <span className={headerStyles.panelWithChildHeaderItemLabel}>性别:</span>
            <span className={headerStyles.panelWithChildHeaderItemValue}>
              {get(data, 'gender') === 0 ? '男' : '女'}
            </span>
          </div>
          <div className={headerStyles.panelWithChildHeaderItem}>
            <span className={headerStyles.panelWithChildHeaderItemLabel}>出生日期:</span>
            <span className={headerStyles.panelWithChildHeaderItemValue}>{get(data, 'dob')}</span>
          </div>
          <div className={headerStyles.panelWithChildHeaderItem}>
            <span className={headerStyles.panelWithChildHeaderItemLabel}>年龄:</span>
            <span className={headerStyles.panelWithChildHeaderItemValue}>{get(data, 'age')}</span>
          </div>
          <div className={headerStyles.panelWithChildHeaderItem}>
            <span className={headerStyles.panelWithChildHeaderItemLabel}>母亲:</span>
            <span className={headerStyles.panelWithChildHeaderItemValue}>{get(data, 'mother.name')}</span>
          </div>
        </div>
        {/* <Divider className={headerStyles.panelWithChildHeaderDivider}></Divider> */}
      </>
    );
  };

  renderContent = () => {
    const { id, data, activeKey, childArchives } = this.state;

    return (
      <Tabs defaultActiveKey={activeKey} type="card" size="small" onChange={this.handleChangeTab}>
        {/* <Tabs.TabPane tab="出生信息登记" key="BirthInformation">
          {activeKey === 'BirthInformation' && <BirthInformation data={data} />}
        </Tabs.TabPane> */}
        <Tabs.TabPane tab="体格检查" key="PhysicalExamination">
          {activeKey === 'PhysicalExamination' && (
            <PhysicalExamination id={id} setID={this.setID} data={data} childArchivesData={childArchives} />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab="内科检查" key="GeneralExamination">
          {activeKey === 'GeneralExamination' && (
            <GeneralExamination id={id} setID={this.setID} data={data} childArchivesData={childArchives} />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab="辅助检查" key="AuxiliaryExamination">
          {activeKey === 'AuxiliaryExamination' && (
            <AuxiliaryExamination id={id} setID={this.setID} data={data} childArchivesData={childArchives} />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab="传染病史" key="InfectedHistory">
          {activeKey === 'InfectedHistory' && (
            <InfectedHistory id={id} setID={this.setID} data={data} childArchivesData={childArchives} />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab="高危儿登记" key="HighRiskInfant">
          {activeKey === 'HighRiskInfant' && (
            <HighRiskInfant id={id} data={data} setID={this.setID} childArchivesData={childArchives} />
          )}
        </Tabs.TabPane>
        <Tabs.TabPane tab="转诊登记" key="NeonateRecord"></Tabs.TabPane>
        <Tabs.TabPane tab="下次体检预约" key="PostpartumVisit"></Tabs.TabPane>
      </Tabs>
    );
  };
}
