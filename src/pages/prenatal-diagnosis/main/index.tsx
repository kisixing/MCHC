import React, { Component, ReactNode } from 'react';
import { Button } from 'antd';
import request from '@/utils/request'
import MedicalRecordList from '../medical-record/list';
import OperationRecordList from '../operation-record/list';
// import OperationRecord from '../operation-record/form/index';
import { getPageQuery } from '@/utils/utils';
import styles from './index.less';

const componentList = {
  "medical-record": MedicalRecordList,
  "operation-record": OperationRecordList
}

const buttnGroup = [
  { key: "medical-record", title: "专科病历" },
  { key: "operation-record", title: "手术病历" },
]

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

  componentDidMount() {
    const urlParams = getPageQuery();
    if (urlParams.prenatalPatientId) {
      this.getPatientData(urlParams.prenatalPatientId);
    }
  }

  componentDidUpdate(_prevProps: {}, prevState: PrenatalDiagnosisState) {
    const { id = ""} = this.state.patients; 
    const prevId = prevState.patients.id; 
    if(prevId !== id){
      this.getPatientData(id);
    }
  }

  renderInfo = (patients: any):ReactNode => {
    if(patients){
      return <div className={styles['user-info']}>
        <div>
          <span>病人姓名:</span><strong>{patients.name}</strong>
        </div>
        <div>
          <span>末次月经:</span><strong>{patients.lmp}</strong>
        </div>
        <div>
          <span>预产期-日期:</span><strong>{patients.edd}</strong>
        </div>
        <div>
          <span>预产期-B超:</span><strong>{patients.sureEdd}</strong>
        </div>
      </div>
    }
    return <span>无用户信息</span>;
  }

  renderButton = (buttonGroup: Array<{ key: string, title: string }>): ReactNode => {
    const { currentPageKey } = this.state;
    return buttnGroup.map((v: { key: string, title: string }) => {
      return <div key={v.key}>
        <Button
          onClick={() => this.setState({currentPageKey: v.key})}
          type={currentPageKey === v.key ? "primary" : "default"}
        >
          {v.title}
        </Button>
      </div>
    })
  }

  renderPage = (key: string):ReactNode => {
    if(key){
      const RenderComponent = componentList[key];
      return <RenderComponent/>
    }
    return null;
  }

  // 获取病人信息
  getPatientData = (id: string|number = "") => {
    request(`/prenatal-patients?id.equals=${id}`,{
      method: "GET"
    }).then(res => {
      if(res.length !== 0){
        this.setState({patients: res[0]})
      }
    })
  }

  render() {
    const { currentPageKey, patients = {} } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles['user-info']}>
          {this.renderInfo(patients)}
        </div>
        <hr/>
        <div className={styles['button-group']}>
          {this.renderButton(buttnGroup)}
        </div>
        <div className={styles.page}>
          {this.renderPage(currentPageKey)}
        </div>
      </div>
    )
  }
}