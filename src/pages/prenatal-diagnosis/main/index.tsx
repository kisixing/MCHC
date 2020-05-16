import React, { Component, ReactNode } from 'react';
import { Button } from 'antd';
import request from '@/utils/request'
import MedicalRecord from '../medical-record/index';
import OperationRecord from '../operation-record/index';
import styles from './index.less';

const componentList = {
  "medical-record": MedicalRecord,
  "operation-record": OperationRecord
}

const buttnGroup = [
  { key: "medical-record", title: "专科病历" },
  { key: "operation-record", title: "手术记录" },
]

const getWindowLocationParams = (url: string) => {
  const r = {};
  const paramString = url.split("?")[1];
  if (paramString) {
    const paramArr = paramString.split("&");
    paramArr.forEach((str: string) => {
      const strArr = str.split("=");
      r[strArr[0]] = strArr[1];
    })
  }
  return r;
}

interface PrenatalDiagnosisState {
  id: string,
  currentPageKey: string,
  patients: any
}

export default class PrenatalDiagnosis extends Component<{},PrenatalDiagnosisState>{

  constructor(props: any) {
    super(props);
    this.state = {
      id: "-1",
      currentPageKey: "",
      patients: {

      }
    }
  }

  componentDidMount() {
    this.getIdFormURL();
    // this.getPatients();

  }

  componentDidUpdate() {
    // this.getPatients();
  }

  getIdFormURL = () => {
    const { href } = window.location;
    const urlParams = getWindowLocationParams(href);
    if ("id" in urlParams) {
      this.setState({ id: urlParams.id })
    }
  }

  renderInfo = (userData: any):ReactNode => {
    if(userData){
      return 
    }
    return <span>无用户信息</span>;
  }

  renderButton = (buttonGroup: Array<{ key: string, title: string }>): ReactNode => {
    const { currentPageKey } = this.state;
    return buttnGroup.map((v: { key: string, title: string }) => {
      return <div>
        <Button
          key={v.key}
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


  getPatients = () => {
    request("/prenatal-patients?outpatientNO=1",{
      method: "GET"
    }).then((res:any) => console.log(res))
  }

  // newPatients = () => {
  //   request("/prenatal-patients",{
  //     method: "POST"
  //   }).then((res:any) => console.log(res))
  // }


  render() {
    const { id, currentPageKey } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles['user-info']}>
          {this.renderInfo(undefined)}
        </div>
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