import React,{ ReactNode } from 'react';
import { Button, message } from 'antd';
import MyForm from '@/components/MyForm/index';
import config from './config/index';

import FloatTreeMenu from '@/components/FloatTreeMenu';

import styles from './index.less';
import { isNotEmpty, getPageQuery } from '@/utils/utils';
import request from '@/utils/request';
import { getRenderData, getFormData } from '@/components/MyForm/utils';

interface OperationRecordState {
  formHandler: {
    [key: string]: any
  },
  data: any,
  id: number,
  prenatalPatientId: number,
  patients: any
}

const URL = "/pd-operations";
const operationNames = {
  1: "羊膜腔穿刺",
  2: "绒毛活检术",
  3: "脐带穿刺术",
  4: "羊膜腔灌注术",
  5: "选择性减胎",
  6: "羊水减量",
  7: "宫内输血",
  8: "胎儿胸腔积液",
  9: "腹水",
  10: "囊液穿刺",
}


export default class OperationRecord extends React.Component<{}, OperationRecordState>{
  constructor(props: any) {
    super(props);
    this.state = {
      formHandler: {

      },
      data: {
        id: "", // 病历id
        operationType: 1,
        // operationName: "羊膜腔穿刺"
      },
      id: -1,
      prenatalPatientId: -1,
      patients: {}
    }
  }

  componentDidMount() {
    const urlParams = getPageQuery();
    if (!urlParams.prenatalPatientId) {
      message.error('无用户id,请从手术病历列表进入');
      return;
    }
    this.setState({ prenatalPatientId: urlParams.prenatalPatientId, id: urlParams.id || -1 });

    request(`/prenatal-patients?id.equals=${urlParams.prenatalPatientId}`,{
      method: "GET"
    }).then(res => {
      if(res.length !== 0){
        this.setState({patients: res[0]})
      }
    })

    if (urlParams.prenatalPatientId && urlParams.id) {
      this.getPdOperations(urlParams.prenatalPatientId, urlParams.id);
    }
  }

  componentDidUpdate() {
    const { formHandler, data } = this.state;
    
    if (isNotEmpty(formHandler)) {
      formHandler.subscribe("operationType", "change", (val: any) => {
        this.setState({
          data: {
            id: data.id,
            operationType: val
          }
        })
      })
    }
  }

  // 获取病历
  getPdOperations = (prenatalPatientId: number|string, id: number) => {
    request(`${URL}?prenatalPatientId.equals=${prenatalPatientId}&id.equals=${id}`, {
      method: "GET"
    }).then((res: any) => {
      if (res.length !== 0) {
        this.setState({ data: res[0] })
      }
    });
  }


  handleSubmit = () => {
    const { prenatalPatientId, id } = this.state;
    this.state.formHandler.dispatch("_global", "submit", {});
    this.state.formHandler.submit().then(({ validCode, res }: any) => {
      if (validCode) {
        const formatData = getFormData(res);
        const [method, info] = id !== -1 ? ["PUT", "修改成功"] : ["POST", "成功新增病历"];
        request(`${URL}`, {
          method,
          data: {
            ...formatData,
            operationName: operationNames[formatData.operationType],
            prenatalPatient: {
              id: Number(prenatalPatientId)
            }
          }
        }).then((r: any) => {
          if (r) {
            message.success(info);
          }
        })
      } else {
        message.warn("请填写所有必填项后再次提交");
      }
    });
  }

  handleReset = () => {
    const { data, formHandler } = this.state;
    formHandler.dispatch("_global", "reset", {});
    formHandler.reset();
    this.setState({
      data: {
        id: data.id,
        operationType: 1
      }
    })
  }

  renderInfo = (patients: any):ReactNode => {
    if(patients){
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

  handleTreeMenuSelect = (id: number) => {
    const { prenatalPatientId } = this.state;
    this.getPdOperations(prenatalPatientId, id);
  }

  render() {
    const { data, patients, prenatalPatientId } = this.state;
    let { operationType } = data;
    if(operationType === null){ operationType = 1; }
    const myConfig = getRenderData(config[operationType], data);
    return (
      <div className={styles.container}>
        <div className={styles['user-info']}>
          {this.renderInfo(patients)}
        </div>
        <div className={styles.form}>
          <MyForm
            config={myConfig}
            getFormHandler={(formHandler: any) => this.setState({ formHandler })}
            submitChange={false}
          />
          <div className={styles['btn-group']}>
            <Button onClick={this.handleReset}>重置</Button>
            <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          </div>
        </div>
        <FloatTreeMenu
          url={`/${URL}?prenatalPatientId.equals=${prenatalPatientId}`}
          firstLayer={{
            key: "operationDate",
            render: (text:any) => text
          }}
          secondLayer={{
            key: "id",
            render: (text:any, record: any) => record.operationName
          }}
          onSelect={this.handleTreeMenuSelect}
        />
      </div>
    )
  }
}