import React from 'react';
import { Button, message } from 'antd';
import MyForm from '@/components/MyForm/index';

import config from './config';
// import data from './data';
import { getRenderData, getFormData } from '@/components/MyForm/utils'
import { getPageQuery } from '@/utils/utils';

import request from '@/utils/request';
import styles from './index.less';

interface MedicalRecordState {
  formHandler: {
    [key: string]: any
  },
  data: any,
  id: number,
  prenatalPatientId: number
}

const URL = "/prenatal-diagnoses";


export default class MedicalRecord extends React.Component<MedicalRecordProps, MedicalRecordState>{
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
      id: -1,               // 病历id
      prenatalPatientId: -1  // 产期患者id
    }
  }

  componentDidMount() {
    const urlParams = getPageQuery();
    if (!urlParams.prenatalPatientId) {
      message.error('无用户id,请从专科病历列表进入');
      return;
    }
    this.setState({ prenatalPatientId: urlParams.prenatalPatientId, id: urlParams.id || -1 })
    // 修改
    if (urlParams.prenatalPatientId && urlParams.id) {
      request(`${URL}?prenatalPatientId.equals=${urlParams.prenatalPatientId}&id.equals=${urlParams.id}`, {
        method: "GET"
      }).then((res: any) => {
        if (res.length !== 0) {
          this.setState({ data: res[0] })
        }
      });
    }
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
    const { formHandler = {} } = this.state;
    if (formHandler.reset) {
      formHandler.dispatch("_global", "reset", {})
      formHandler.reset();
    }
  }

  render() {
    const { data } = this.state;
    const myConfig = getRenderData(config, data);
    return (
      <div className={styles.container}>
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
    )
  }
}
