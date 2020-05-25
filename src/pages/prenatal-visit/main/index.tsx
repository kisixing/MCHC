import React, { Component } from 'react';
import { Tabs } from 'antd';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';
import { connect } from 'dva';

import Initial from './initial';
import Return from './return';
import Base from './base';
import BloodSugar from './blood-sugar';
import Curve from './curve';
import ImageReport from './image-report';
import SurveyReport from './survey-report';
import HighriskFactor from './components/high-risk-factor';
import HeaderInfo from './components/header-info';
// import ScarredUterus from './components/scarred-uterus';
import styles from './index.less';

interface PrenatalDiagnosisState {
  currentPageKey: string,
  formData: any,
  state: any,
}

const routers = [
  { name: "首检信息", component: <Initial />, key: 'Initial'},
  { name: "复诊记录", component: <Return />, key: 'Return' },
  { name: "孕期曲线", component: <Curve />, key: 'Curve' },
  { name: "血糖记录", component: <BloodSugar />, key: 'BloodSugar' },
  { name: "影像报告", component: <ImageReport />, key: 'ImageReport' },
  { name: "检验报告", component: <SurveyReport />, key: 'SurveyReport' },
  { name: "基本信息", component: <Base />, key: 'Base' },
];

class Main extends Component<{},PrenatalDiagnosisState>{

  constructor(props: any) {
    super(props);
    this.state = {
      currentPageKey: "medical-record",
      formData: null,
      state: null
    }
  }

  componentDidMount() {
    console.log(this.state, '444678')
    const urlParam = getPageQuery();

    request(`/pregnancies?id.equals=${urlParam.id}`,{
      method: "GET"
    }).then(res => {
      if(res.length !== 0){
        this.setState({formData: res[0]})
      }
    });
  }


  render() {
    return (
      <div className={styles.container}>
        <HeaderInfo />
        <Tabs defaultActiveKey="1" type="card" size="small">
          {routers.map((item) => (
            <Tabs.TabPane tab={item.name} key={item.key}>
              {item.component}
            </Tabs.TabPane>
          ))}
        </Tabs>
        <HighriskFactor />
        {/* <ScarredUterus /> */}
      </div>
    )
  }
}

export default connect(
  state => console.log(state.info, '2456')
)(Main);
