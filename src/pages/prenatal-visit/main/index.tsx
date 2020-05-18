import React, { Component } from 'react';
import { Tabs } from 'antd';
import Initial from './components/initial';
import Return from './components/return';
import styles from './index.less';

interface PrenatalDiagnosisState {
  currentPageKey: string,
  patients: any
}

export default class PrenatalDiagnosis extends Component<{},PrenatalDiagnosisState>{

  constructor(props: any) {
    super(props);
    this.state = {
      currentPageKey: "medical-record",
      patients: {

      }
    }
  }

  render() {
    return (
      <div className={styles.container}>
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
