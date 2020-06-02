import React, { Component } from 'react';
import { Button, message } from 'antd';
import MyForm from '@/components/MyForm';
import observePatientData from '@/utils/observePatientData';
import { getFormData } from '@/components/MyForm/utils';
import request from '@/utils/request';
import config from './config';
import { getExpected } from '@/utils/formula';
import { getPageQuery } from '@/utils/utils';
import styles from './index.less';
import moment from 'moment';

const idNOReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

interface NewPatientState {
  formHandler: {
    [key: string]: any
  },
  patients: any
}

const URL = "/prenatal-patients";

export default class NewPatient extends Component<{}, NewPatientState>{
  constructor(props: any) {
    super(props);
    this.state = {
      formHandler: {

      },
      patients: {
        // name: "张三",
        // lmp: "2020-02-02",
        // edd: "2020-12-04",
        // sureEdd: "2020-12-21",
        // gravidity: 1,
        // parity: 1,
        // abortion: 1,
        // exfetation: 1
        id: ""
      }
    }
  }

  componentDidMount() {
    const urlParam = getPageQuery();
    if (urlParam.prenatalPatientId) {
      request(`${URL}?id.equals=${urlParam.prenatalPatientId}`, {
        method: "GET"
      }).then(res => {
        if (res.length !== 0) {
          this.setState({ patients: res[0] })
        }
      });
    }
  }

  componentDidUpdate() {
    observePatientData.subscribe((data: any) => {
      this.setState({
        patients: {
          idType: data.idType,
          idNO: data.idNO,
          age: data.age,
          outpatientNO: data.outpatientNO,
          name: data.name
        }
      })
    });
    const { formHandler } = this.state;
    if (formHandler.subscribe) {
      formHandler.subscribe("idNO", "change", (val: string) => {
        const idType = formHandler.idType.actions.getValue();
        if (idType.value === 1) {
          const year = Number(val.slice(6, 10));
          const now = moment().year();
          formHandler.age.actions.setValue(now - year);
        }
      });
      formHandler.subscribe("idType", "change", (val: string) => {
        formHandler.idNO.actions.setValue("");
      });
      formHandler.subscribe("lmp", "change", (val: string) => {
        formHandler.edd.actions.setValue(getExpected(val));
        formHandler.sureEdd.actions.setValue(getExpected(val));
      })
    }
  }

  handleSubmit = () => {
    const { id } = this.state.patients;
    this.state.formHandler.submit().then(({ validCode, res }: any) => {
      if (validCode) {
        // 通过id判断 为新建还是修改
        const [method, info] = id !== "" ? ["PUT", "成功修改病人信息"] : ["POST", "新增病人信息成功"];
        const resData = getFormData(res)
        request(`${URL}`, {
          method,
          data: { ...resData, id }
        }).then((r: any) => {
          if (r) {
            message.success(info)
          }
        })
      } else {
        message.warn("请填写所有必填项后再次提交");
      }
    })
  }

  handleReset = () => {
    const { formHandler = {} } = this.state;
    if (formHandler.reset) {
      formHandler.reset();
    }
  }

  render() {
    const { patients } = this.state;
    return (
      <div className={styles.container}>
        <MyForm
          config={config}
          value={patients}
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