import React, { Component } from 'react';
import { Tabs } from 'antd';
import Initial from './components/initial';
import Return from './components/return';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';
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
      </div>
    }
    return null;
  }


  render() {
    return (
      <div className={styles.container}>
        { this.renderInfo() }
        <Tabs defaultActiveKey="1" type="card" size="small">
          <Tabs.TabPane tab="首诊" key="Initial">
            <Initial />
          </Tabs.TabPane>
          <Tabs.TabPane tab="复诊" key="Return">
            <Return />
          </Tabs.TabPane>
        </Tabs>
      </div>
    )
  }
}
