import React from 'react';
import { Button, message, Tree } from 'antd';
import FloatDragableCard from '@/components/FloatDragableCard';
import MyForm from '@/components/MyForm/index';
import moment from 'moment';

import { Dispatch } from 'redux';
import { PrenatalDiagnosisModelState } from '../../main/model';

import { connect } from 'dva';
import { generateTreeData } from '../../utils';
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
  currentTreeKeys: Array<string | number>
}

interface MedicalRecordProps {
  patient: any,
  dispatch: Dispatch
}

const URL = "/prenatal-diagnoses";


class MedicalRecord extends React.Component<MedicalRecordProps, MedicalRecordState>{
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
      patient: {},
      medicalRecordList: [],
      treeData: [],
      currentTreeKeys: []
    }
  }

  componentDidUpdate(_prevProps: MedicalRecordProps, prevState: MedicalRecordState) {
    // 获取所有的病历
    if (this.state.patient.id !== this.props.patient.id) {
      const { patient = {} } = this.props;
      this.setState({ patient }, () => {
        const prenatalPatientId = this.state.patient.id;
        // 获取所有的专科病历
        this.getPrenatalDiagnosis(prenatalPatientId, "");
      })
    }
    // 生成树形结构的数据
    const { medicalRecordList, treeData } = this.state;
    if (medicalRecordList.length !== 0 && treeData.length === 0) {
      const newTreeData = generateTreeData(
        medicalRecordList,
        { key: "visitDate", render: (text: string, _record: any) => text },
        { key: "id", render: (_text: string, _record: any) => "专科病历" },
      )
      this.setState({ treeData: newTreeData });
    }
    if (prevState.currentTreeKeys !== this.state.currentTreeKeys) {
      this.getPrenatalDiagnosis(this.state.patient.id, this.state.currentTreeKeys[0]);
    }
  }

  // 获取病历
  getPrenatalDiagnosis = (prenatalPatientId: number | string, id: number | string) => {
    if(Number(id) < 0){
      return ;
    }
    request(`${URL}?prenatalPatientId.equals=${prenatalPatientId}&id.equals=${id}&sort=visitDate,desc`, {
      method: "GET"
    }).then((res: any) => {
      if (res.length !== 0) {
        if (id) {
          this.setState({ data: res[0] })
        } else {
          // 默认加载第一份病历
          this.setState({medicalRecordList: res})
        }
      }
    });
  }

  newRecord = () => {
    const todayStr = moment().format("YYYY-MM-DD");
    const newId = - Math.random();
    const { treeData } = this.state;
    if (treeData[0].title === todayStr) {
      treeData[0].children.splice(0, 0, {
        title: "新建病历",
        key: newId
      })
    } else {
      treeData.splice(0, 0, {
        title: todayStr,
        key: todayStr,
        children: [
          {
            title: "新建病历",
            key: newId
          }
        ]
      })
    }
    this.setState({
      treeData,
      currentTreeKeys: [newId]
    });
  }

  handleSubmit = () => {
    const prenatalPatientId = this.props.patient.id;
    this.state.formHandler.dispatch("_global", "submit", {});
    this.state.formHandler.submit().then(({ validCode, res }: any) => {
      if (validCode) {
        const formatData = getFormData(res);
        // 新建的时候赋值
        formatData.downsScreens[0].type = 0;
        formatData.downsScreens[1].type = 1;
        formatData.downsScreens[2].type = 2;
        const [method, info] = formatData.id > 0 ? ["PUT", "修改成功"] : ["POST", "成功新增病历"];
        if(formatData.id < 0){
          formatData.id = "";
        }
        request(`${URL}`, {
          method,
          data: {
            ...formatData,
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

  render() {
    const { data, treeData, currentTreeKeys } = this.state;
    return (
      <div className={styles.container}>
        {/* {currentTreeKeys.length !== 0 ? ( */}
        <div className={styles.form}>
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
        {/* ) : null} */}
        <FloatDragableCard
          title="专科病历列表"
        >
          {/* {treeData.length !== 0 ? ( */}
            <div>
              {/* <Button
                
                onClick={this.newRecord}
              >新建病历</Button>
              <br /> */}
              <Tree
                treeData={treeData}
                // defaultExpandAll
                onSelect={this.handleTreeSelect}
                selectedKeys={currentTreeKeys}
              />
            </div>
          {/* ) : <Spin />} */}
        </FloatDragableCard>
      </div>
    )
  }
}

export default connect(({ prenatalDiagnosis }: { prenatalDiagnosis: PrenatalDiagnosisModelState }) => {
  return {
    patient: prenatalDiagnosis.patient
  }
})(MedicalRecord)