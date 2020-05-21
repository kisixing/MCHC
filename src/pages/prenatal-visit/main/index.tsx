import React, { Component } from 'react';
import { Tabs } from 'antd';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

import Initial from './initial';
import Return from './return';
import Base from './base';
import BloodSugar from './blood-sugar';
import Curve from './curve';
import ImageReport from './image-report';
import SurveyReport from './survey-report';
import HighriskFactor from './components/high-risk-factor';
import styles from './index.less';

interface PrenatalDiagnosisState {
  currentPageKey: string,
  formData: any
}

export default class PrenatalDiagnosis extends Component<{},PrenatalDiagnosisState>{

  constructor(props: any) {
    super(props);
    this.state = {
      currentPageKey: "medical-record",
      formData: null
    }
  }

  componentDidMount() {
    const urlParam = getPageQuery();

    request(`/pregnancies?id.equals=${urlParam.id}`,{
      method: "GET"
    }).then(res => {
      if(res.length !== 0){
        this.setState({formData: res[0]})
      }
    });
  }

  renderInfo = () => {
    const { formData } = this.state;
    if(formData){
      return <div className={styles['user-info']}>
        <div>
          <span>姓名:</span><strong>{formData.name}</strong>
        </div>
        <div>
          <span>年龄:</span><strong>{formData.age}</strong>
        </div>
        <div>
          <span>孕周:</span><strong>{formData.gestationalWeek}</strong>
        </div>
        <div>
          <span>预产期-日期:</span><strong>{formData.edd}</strong>
        </div>
        <div>
          <span>预产期-B超:</span><strong>{formData.sureEdd}</strong>
        </div>
        <div>
          <span>产检编号:</span><strong>{formData.checkupNO}</strong>
        </div>
        <div>
          <span>高危等级:</span><strong>{formData.highrisk}</strong>
        </div>
        <div>
          <span>高危因素:</span><strong>{formData.highriskNote}</strong>
        </div>
      </div>
    }
    return null;
  }


  render() {
    return (
      <div className={styles.container}>
        { this.renderInfo() }
        <Tabs defaultActiveKey="1" type="card" size="small">
          <Tabs.TabPane tab="首检信息" key="Initial">
            <Initial />
          </Tabs.TabPane>
          <Tabs.TabPane tab="复诊记录" key="Return">
            <Return />
          </Tabs.TabPane>
          <Tabs.TabPane tab="孕期曲线" key="Curve">
            <Curve />
          </Tabs.TabPane>
          <Tabs.TabPane tab="血糖记录" key="BloodSugar">
            <BloodSugar />
          </Tabs.TabPane>
          <Tabs.TabPane tab="影像报告" key="ImageReport">
            <ImageReport />
          </Tabs.TabPane>
          <Tabs.TabPane tab="检验报告" key="SurveyReport">
            <SurveyReport />
          </Tabs.TabPane>
          <Tabs.TabPane tab="基本信息" key="Base">
            <Base />
          </Tabs.TabPane>
        </Tabs>
        <HighriskFactor />
      </div>
    )
  }
}
