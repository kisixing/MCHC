import React from 'react';
import { Button, message, Tree } from 'antd';
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
  currentTreeKeys: Array<string | number>,

  showMenu: boolean
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
      currentTreeKeys: [],

      showMenu: true
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
    if (Number(id) < 0) {
      this.setState({ data: {
        id,
        downsScreens: [
          { type: 0 },
          { type: 1 },
          { type: 2 }
        ],
        fetuses: [
          {id: ""}
        ]
      }})
      return;
    }
    request(`${URL}?prenatalPatientId.equals=${prenatalPatientId}&id.equals=${id}&sort=visitDate,desc`, {
      method: "GET"
    }).then((res: any) => {
      if (res.length !== 0) {
        if (id) {
          this.setState({ data: {} }, () => {
            this.setState({ data: res[0] })
          })
        } else {
          // 默认加载第一份病历
          this.setState({ medicalRecordList: res })
        }
      }
    });
  }

  newRecord = () => {
    const todayStr = moment().format("YYYY-MM-DD");
    const newId = - Math.random();
    const { treeData } = this.state;
    const newTreeData = JSON.parse(JSON.stringify(treeData));
    if (newTreeData[0].title === todayStr) {
      newTreeData[0].children.splice(0, 0, {
        title: "新建病历",
        key: newId
      })
    } else {
      newTreeData.splice(0, 0, {
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
      treeData: newTreeData,
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
        if (formatData.id < 0) {
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

  // 暂时使用行内样式
  render() {
    const { data, treeData, currentTreeKeys, showMenu } = this.state;
    return (
      <div className={styles.container}>
        <div
          className={styles['menu-block']}
          style={{
            left: showMenu ? "256px" : "16px"
          }}
        >
          <div
            className={styles.menu}
            style={{ width: "" }}
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
              // defaultExpandAll
              onSelect={this.handleTreeSelect}
              selectedKeys={currentTreeKeys}
            />
          </div>
          <div className={styles.btn}>
            <Button
              onClick={() => this.setState({ showMenu: !showMenu })}
            >
              {showMenu ? "收起菜单" : "展开菜单"}
            </Button>
          </div>
        </div>
        <div
          className={styles.form}
          style={{
            width: showMenu ? "85%" : "100%",
            marginLeft: showMenu ? "15%" : 0
          }}
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
      </div>
    )
  }
}

export default connect(({ prenatalDiagnosis }: { prenatalDiagnosis: PrenatalDiagnosisModelState }) => {
  return {
    patient: prenatalDiagnosis.patient
  }
})(MedicalRecord)