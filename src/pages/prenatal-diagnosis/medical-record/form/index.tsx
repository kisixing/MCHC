/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import { Button, message, Tree } from 'antd';
import MyForm from '@/components/MyForm/index';
import SiderMenu from '../../components/menu/index';
import moment from 'moment';

import { Dispatch } from 'redux';
import { PrenatalDiagnosisModelState } from '../../main/model';

import { connect } from 'dva';
import { generateTreeData, openSpin, closeSpin } from '../../utils';
import { getFormData } from '@/components/MyForm/utils'
import request from '@/utils/request';

import config from './config';
import styles from './index.less';


interface MedicalRecordState {
  formHandler: {
    [key: string]: any
  },
  data: any,
  patient: any,
  medicalRecordList: Array<any>,
  treeData: Array<any>,
  currentTreeKeys: Array<string | number>,

  menuWidth: number
}

interface MedicalRecordProps {
  patient: any,
  dispatch: Dispatch
}

const emptyData = {
  id: "",
  visitDate: "",
  downsScreens: [
    { type: 0 },
    { type: 1 },
    { type: 2 }
  ],
  thalassemiaExams: [
    { target: 0 },
    { target: 1 },
  ],
  fetuses: [
    { id: "" }
  ]
}
const URL = "/prenatal-diagnoses";

class MedicalRecord extends React.Component<MedicalRecordProps, MedicalRecordState>{
  constructor(props: any) {
    super(props);
    this.state = {
      formHandler: {},
      data: emptyData,
      patient: {},
      medicalRecordList: [],
      treeData: [],
      currentTreeKeys: [],
      menuWidth: 0
    }
  }

  componentDidMount() {
    const { patient = {} } = this.props;
    this.setState({ patient }, () => {
      const prenatalPatientId = this.state.patient.id;
      this.getPrenatalDiagnosis(prenatalPatientId, "");
    })
  }

  componentDidUpdate(_prevProps: MedicalRecordProps, prevState: MedicalRecordState) {
    if (this.state.patient.id !== this.props.patient.id) {
      const { patient = {} } = this.props;
      this.setState({ patient }, () => {
        const prenatalPatientId = this.state.patient.id;
        this.getPrenatalDiagnosis(prenatalPatientId, "");
      })
    }
    // 生成树形结构的数据
    const { medicalRecordList, treeData } = this.state;
    if ((medicalRecordList.length !== 0 && treeData.length === 0) 
    || this.state.patient.id !== this.props.patient.id
    || this.state.medicalRecordList.length !== prevState.medicalRecordList.length
    ) {
      const newTreeData = generateTreeData(
        medicalRecordList,
        { key: "visitDate", render: (text: string, _record: any) => text },
        {
          key: "id", render: (_text: string, record: any) => {
            if (Number(record.id) < 0) {
              return "新建病历";
            }
            return "专科病历"
          }
        },
      )
      this.setState({ treeData: newTreeData });
    }
    if (prevState.currentTreeKeys !== this.state.currentTreeKeys) {
      this.getPrenatalDiagnosis(this.state.patient.id, this.state.currentTreeKeys[0]);
    }
  }

  // 获取病历
  getPrenatalDiagnosis = (prenatalPatientId: number | string, id: number | string) => {
    if (Number(id) < 0) { this.setState({ data: emptyData }); return; }
    if (!prenatalPatientId) { return; }
    this.props.dispatch(openSpin);
    request(`${URL}?prenatalPatientId.equals=${prenatalPatientId}&id.equals=${id}&sort=visitDate,desc`, {
      method: "GET"
    }).then((res: any) => {
      this.props.dispatch(closeSpin);
      if (res.length !== 0) {
        if (id) {
          this.setState({ data: res[0] })
        } else {
          this.setState({ medicalRecordList: res })
        }
      } else {
        message.info("无数据");
      }
    });
  }

  newRecord = () => {
    const todayStr = moment().format("YYYY-MM-DD");
    const newId = - Math.random();
    const newMedicalRecordList = JSON.parse(JSON.stringify(this.state.medicalRecordList));
    const newData = emptyData;
    emptyData.id = newId;
    emptyData.visitDate = todayStr;
    newMedicalRecordList.push(newData);
    this.setState({
      medicalRecordList: newMedicalRecordList,
      currentTreeKeys: [newId]
    })
  }

  handleSubmit = () => {
    const prenatalPatientId = this.props.patient.id;
    this.state.formHandler.dispatch("_global", "submit", {});
    this.state.formHandler.submit().then(({ validCode, res }: any) => {
      if (validCode) {
        const formatData = getFormData(res);
        // 这里的手动操作逻辑待定一下
        // 新建的时候赋值
        formatData.downsScreens[0].type = 0;
        formatData.downsScreens[1].type = 1;
        formatData.downsScreens[2].type = 2;
        formatData.thalassemiaExams[0].target = 0;
        formatData.thalassemiaExams[1].target = 1;
        const [method, info] = formatData.id > 0 ? ["PUT", "修改成功"] : ["POST", "成功新增病历"];
        if (formatData.id < 0) {
          formatData.id = "";
        }
        this.props.dispatch(openSpin);
        request(`${URL}`, {
          method,
          data: {
            ...formatData,
            prenatalPatient: {
              id: Number(prenatalPatientId)
            }
          }
        }).then((r: any) => {
          this.props.dispatch(closeSpin);
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

  handleTreeSelect = (key: Array<number | string>, { selected, node }: any) => {
    if (selected && !node.children) {
      this.setState({ currentTreeKeys: key })
    }
  }

  setMenuWidth = (menuWidth: number) => {
    this.setState({ menuWidth });
  }

  render() {
    const { data, treeData, currentTreeKeys, menuWidth } = this.state;
    return (
      <div className={styles.container}>
        <SiderMenu
          getSiderMenuWidth={this.setMenuWidth}
        >
          <div>
            <Button
              size="small"
              onClick={this.newRecord}
            >新建病历</Button>
            <br />
          </div>
          <Tree
            treeData={treeData}
            onSelect={this.handleTreeSelect}
            selectedKeys={currentTreeKeys}
          />
        </SiderMenu>
        {data.id ? (
          <div
            className={styles.form}
            style={{ marginLeft: menuWidth }}
          >
            <MyForm
              config={config}
              value={data}
              getFormHandler={(formHandler: any) => this.setState({ formHandler })}
              submitChange={false}
            />
            <div className={styles['btn-group']}>
              <Button
                disabled={currentTreeKeys.length === 0}
                onClick={this.handleReset}
              >重置</Button>
              <Button
                disabled={currentTreeKeys.length === 0}
                type="primary"
                onClick={this.handleSubmit}
              >提交</Button>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default connect(({ prenatalDiagnosis }: { prenatalDiagnosis: PrenatalDiagnosisModelState }) => {
  return {
    patient: prenatalDiagnosis.patient
  }
})(MedicalRecord)