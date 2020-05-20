import React, { Component } from 'react';
import { Tabs } from 'antd';
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

import YFXX from './YunFuXinXi';
import ZFXX from './ZhangFuXinXi';
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



  render() {
    return (
      <div className={styles.container}>
        <Tabs defaultActiveKey="1" type="card" size="small">
            <Tabs.TabPane tab="孕妇信息" key="YFXX">
              <YFXX />
            </Tabs.TabPane>
            <Tabs.TabPane tab="丈夫信息" key="ZFXX">
              <ZFXX />
            </Tabs.TabPane>
          </Tabs>
      </div>
    )
  }
}
