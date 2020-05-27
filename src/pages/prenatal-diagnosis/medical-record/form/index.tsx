import React,{ ReactNode } from 'react';
import { Button, message } from 'antd';
import MyForm from '@/components/MyForm/index';

import config from './config';

import FloatTreeMenu from '@/components/FloatTreeMenu';

import { getFormData } from '@/components/MyForm/utils'
import { getPageQuery } from '@/utils/utils';

import request from '@/utils/request';
import styles from './index.less';
// import headerStyles from '@/components/BaseEditPanel/index.less';


interface MedicalRecordState {
  formHandler: {
    [key: string]: any
  },
  data: any,
  id: number,
  prenatalPatientId: number,
  patients: any
}

const URL = "/prenatal-diagnoses";


export default class MedicalRecord extends React.Component<any, MedicalRecordState>{
  constructor(props: any) {
    super(props);
    this.state = {
      formHandler: {},
      data: {
        id: "",
        downsScreens: [
          { type: 0 },
          { type: 1 },
          { type: 2 }
        ],
        fetuses: [
          { id: "" }
        ]
      },
      id: -1,                 // 病历id
      prenatalPatientId: -1,  // 产期患者id
      patients: {}
    }
  }

  componentDidMount() {
    const urlParams = getPageQuery();
    if (!urlParams.prenatalPatientId) {
      message.error('无用户id,请从专科病历列表进入');
      return;
    }
    this.setState({ prenatalPatientId: urlParams.prenatalPatientId, id: urlParams.id || -1 })
    // 获取病人信息
  
    request(`/prenatal-patients?id.equals=${urlParams.prenatalPatientId}`,{
      method: "GET"
    }).then(res => {
      if(res.length !== 0){
        this.setState({patients: res[0]})
      }
    })
  
    // 获取病历信息
    if (urlParams.prenatalPatientId && urlParams.id) {
      this.getPrenatalDiagnosis(urlParams.prenatalPatientId, urlParams.id)
    }
  }

  // 获取病历
  getPrenatalDiagnosis = (prenatalPatientId: number|string, id: number) => {
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
        
        // 新建的时候赋值
        formatData.downsScreens[0].type = 0;
        formatData.downsScreens[1].type = 1;
        formatData.downsScreens[2].type = 2;
        const [method, info] = id !== -1 ? ["PUT", "修改成功"] : ["POST", "成功新增病历"];
        request(`${URL}`, {
          method,
          data: {
            ...formatData,
            prenatalPatient:{
              id: Number(prenatalPatientId)
            },
            id: Number(id)
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
    const { formHandler = {} } = this.state;
    if (formHandler.reset) {
      formHandler.dispatch("_global", "reset", {})
      formHandler.reset();
    }
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
  
  handleTreeMenuSelect = (id: number):void => {
    const { prenatalPatientId } = this.state;
    this.getPrenatalDiagnosis(prenatalPatientId, id);
  }

  render() {
    const { data, patients } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles['user-info']}>
          {this.renderInfo(patients)}
        </div>
        <div className={styles.form}>
          <MyForm
            config={config}
            value={data}
            getFormHandler={(formHandler: any) => this.setState({ formHandler })}
            submitChange={false}
          />
          <div className={styles['btn-group']}>
            <Button onClick={this.handleReset}>重置</Button>
            <Button type="primary" onClick={this.handleSubmit}>提交</Button>
          </div>
        </div>
        <FloatTreeMenu
          url={`/${URL}?prenatalPatientId.equals=${getPageQuery().prenatalPatientId}`}
          firstLayer={{
            key: "visitDate",
            render: (text:any) => text
          }}
          secondLayer={{
            key: "id",
            render: (text:any) => "专科病历"
          }}
          onSelect={this.handleTreeMenuSelect}
        />
      </div>
    )
  }
}
