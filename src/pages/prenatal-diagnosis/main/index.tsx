import React, { Component, ReactNode } from 'react';
import { Tabs, message, Spin } from 'antd';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import request from '@/utils/request'
import MedicalRecordForm from '../medical-record/form';
import OperationRecordForm from '../operation-record/form';
import Inspection from '../inspection/index';
import Image from '../image/index';
import { PrenatalDiagnosisModelState } from './model';
import { getPageQuery } from '@/utils/utils';
import styles from './index.less';


const routers = [
  { name: "专科病历", component: <MedicalRecordForm />, key: "MedicalRecord" },
  { name: "手术病历", component: <OperationRecordForm />, key: "OperationRecord" },
  { name: "检验检查", component: <Inspection />, key: "Inspection" },
  { name: "影像报告", component: <Image />, key: "Image" },
]

const { TabPane } = Tabs;
interface PrenatalDiagnosisProps {
  patients: any,
  isRequesting: boolean,
  dispatch: Dispatch,
}

interface PrenatalDiagnosisState {
  currentPageKey: string,
  patients: any
}

class PrenatalDiagnosis extends Component<PrenatalDiagnosisProps, PrenatalDiagnosisState>{

  constructor(props: any) {
    super(props);
    this.state = {
      currentPageKey: "MedicalRecord",
      patients: {

      }
    }
  }

  componentDidMount() {
    const urlParams = getPageQuery();
    if (urlParams.prenatalPatientId) {
      this.getPatientData(urlParams.prenatalPatientId);
    } else {
      message.error("无用户信息，请从产前病历用户列表进入");
    }
  }

  // 获取病人信息
  getPatientData = (id: string | number = "") => {
    const { dispatch } = this.props;
    request(`/prenatal-patients?id.equals=${id}`, {
      method: "GET"
    }).then(res => {
      if (res.length !== 0) {
        this.setState({ patients: res[0] }, () => {
          // 保存至store
          dispatch({
            type: "prenatalDiagnosis/changePatient",
            payload: this.state.patients
          })
        })
      }
    })
  }

  renderInfo = (patients: any): ReactNode => {
    if (patients) {
      return <div className={styles['user-info']}>
        <div>
          <span>病人姓名:{patients.name}</span>
        </div>
        <div>
          <span>末次月经:{patients.lmp}</span>
        </div>
        <div>
          <span>预产期-日期:{patients.edd}</span>
        </div>
        <div>
          <span>预产期-B超:{patients.sureEdd}</span>
        </div>
      </div>
    }
    return <span>无用户信息</span>;
  }

  renderTab = () => {
    const { currentPageKey } = this.state;
    return (
      <Tabs
        defaultActiveKey={currentPageKey}
        type="card"

      >
        {routers.map((item: any) => (
          <TabPane
            tab={item.name}
            key={item.key}
          >
            {item.component}
          </TabPane>
        ))}
      </Tabs>
    )
  }

  render() {
    const { patients = {} } = this.state;
    const { isRequesting } = this.props;
    return (
      <div className={styles.container} id="prenatal-diagnosis">
        <Spin
          spinning={isRequesting}
        >
          {this.renderInfo(patients)}
          <div>
            {this.renderTab()}
          </div>
        </Spin>
      </div>
    )
  }
}

export default connect(({ prenatalDiagnosis }: { prenatalDiagnosis: PrenatalDiagnosisModelState }) => {
  return {
    patient: prenatalDiagnosis.patient,
    isRequesting: prenatalDiagnosis.isRequesting
  }
})(PrenatalDiagnosis)