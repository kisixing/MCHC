/* eslint-disable react/no-did-update-set-state */
import React from 'react';
import { Button, message, Tree } from 'antd';
import MyForm from '@/components/MyForm/index';
import NoDataTip from '../../components/NoDataTip';
import SiderMenu from '../../components/Menu/index';

import { Dispatch } from 'redux';
import { PrenatalDiagnosisModelState } from '../../main/model';

import moment from 'moment';
import { connect } from 'dva';
import { getFormData } from '@/components/MyForm/utils';
import { generateTreeData, openSpin, closeSpin } from '../../utils';

import request from '@/utils/request';
import config from './config/index';
import styles from './index.less';


interface OperationRecordProp {
  patient: any,
  dispatch: Dispatch
}
interface OperationRecordState {
  formHandler: {
    [key: string]: any
  },
  data: any,
  patient: any,
  operationRecordList: Array<any>,
  treeData: Array<any>,
  currentTreeKeys: Array<string | number>,

  menuWidth: number
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

const emptyData = {
  id: null,
  operationType: 1,
  operationDate: ""
}

class OperationRecord extends React.Component<OperationRecordProp, OperationRecordState>{
  constructor(props: any) {
    super(props);
    this.state = {
      formHandler: {},
      data: emptyData,
      patient: {},
      operationRecordList: [],
      treeData: [],
      currentTreeKeys: [],

      menuWidth: 0
    }
  }

  componentDidMount() {
    const { patient } = this.props;
    this.setState({ patient }, () => {
      const prenatalPatientId = this.state.patient.id;
      // 获取所有的专科病历
      this.getPdOperations(prenatalPatientId, "");
    })
  }

  componentDidUpdate(_prevProps: OperationRecordProp, prevState: OperationRecordState) {
    // 获取所有病历
    if (this.state.patient.id !== this.props.patient.id) {
      const { patient = {} } = this.props;
      this.setState({ patient }, () => {
        const prenatalPatientId = this.state.patient.id;
        // 获取所有的专科病历
        this.getPdOperations(prenatalPatientId, "");
      })
    }
    // 生成树形结构数据
    const { operationRecordList, treeData } = this.state;
    if ((operationRecordList.length !== 0 && treeData.length === 0)
      || this.state.patient.id !== this.props.patient.id
      || JSON.stringify(this.state.operationRecordList) !== JSON.stringify(prevState.operationRecordList)
    ) {
      const newTreeData = generateTreeData(
        operationRecordList,
        { key: "operationDate", render: (text: string, _record: any) => text },
        {
          key: "id",
          render: (_text: string, record: any) => {
            if (Number(record.id) < 0) {
              return "新建病历";
            }
            return record.operationName
          }
        },
      )
      this.setState({ treeData: newTreeData });
    }
    if (prevState.currentTreeKeys !== this.state.currentTreeKeys) {
      this.getPdOperations(this.state.patient.id, this.state.currentTreeKeys[0]);
    }
    // 表单监听
    const { formHandler = {} } = this.state;
    if (formHandler.subscribe) {
      formHandler.subscribe("operationType", "change", (val: any) => {
        const { id = "" } = this.state.data;
        this.setState({ data: { id, operationType: val } });
      })
    }
  }

  // 获取病历
  getPdOperations = (prenatalPatientId: number | string, id: number | string) => {
    if (Number(id) < 0) {
      this.setState({
        data: {
          id,
          operationType: 1
        }
      });
      return;
    }
    if (!prenatalPatientId) {
      return;
    }
    this.props.dispatch(openSpin);
    request(`${URL}?prenatalPatientId.equals=${prenatalPatientId}&id.equals=${id}&sort=operationDate,desc`, {
      method: "GET"
    }).then((res: any) => {
      this.props.dispatch(closeSpin);
      if (res.length !== 0) {
        if (id) {
          this.setState({ data: {} }, () => {
            this.setState({ data: res[0] })
          })
        } else {
          this.setState({ operationRecordList: res })
        }
      }
    });
  }

  handleTreeSelect = (key: Array<number | string>, { selected, node }: any) => {
    if (selected && !node.children) {
      this.setState({ currentTreeKeys: key });
    }
  }

  // 考虑以后这里的优化
  newRecord = () => {
    const todayStr = moment().format("YYYY-MM-DD");
    const newOperationRecordList = JSON.parse(JSON.stringify(this.state.operationRecordList));
    const newData = emptyData;
    const newId = - Math.random();
    newData.operationDate = todayStr;
    newData.id = newId;
    newOperationRecordList.push(newData);
    this.setState({
      operationRecordList: newOperationRecordList,
      currentTreeKeys: [newId]
    })
  }

  handleSubmit = () => {
    const prenatalPatientId = this.props.patient.id;
    const { data } = this.state;
    this.state.formHandler.dispatch("_global", "submit", {});
    this.state.formHandler.submit().then(({ validCode, res }: any) => {
      if (validCode) {
        const formatData = getFormData(res);
        const [method, info] = data.id > 0 ? ["PUT", "修改成功"] : ["POST", "成功新增病历"];
        if (data.id < 0) {
          formatData.id = "";
        } else {
          formatData.id = data.id;
        }
        this.props.dispatch(openSpin);
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
          this.props.dispatch(closeSpin);
          if (r) {
            message.success(info);
            this.getPdOperations(prenatalPatientId, "");
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

  setMenuWidth = (menuWidth: number) => {
    this.setState({ menuWidth });
  }

  render() {
    const { data, treeData, menuWidth, currentTreeKeys } = this.state;
    let { operationType } = data;
    if (operationType === null) { operationType = 1; }
    return (
      <div className={styles.container}>
        <SiderMenu
          getSiderMenuWidth={this.setMenuWidth}
        >
          <div>
            <Button
              size="small"
              onClick={this.newRecord}
            >新增病历</Button>
          </div>
          <Tree
            treeData={treeData}
            onSelect={this.handleTreeSelect}
            selectedKeys={currentTreeKeys}
          />
          {treeData.length === 0 && <NoDataTip />}
        </SiderMenu>
        {treeData.length === 0 && <NoDataTip />}
        {data.id ? (
          <div
            className={styles.form}
            style={{ marginLeft: menuWidth }}
          >
            <MyForm
              config={config[operationType]}
              value={data}
              getFormHandler={(formHandler: any) => this.setState({ formHandler })}
              submitChange={false}
            />
            <div className={styles['btn-group']}>
              <Button
                disabled={currentTreeKeys.length === 0}
                onClick={this.handleReset}>重置</Button>
              <Button
                disabled={currentTreeKeys.length === 0}
                type="primary"
                onClick={this.handleSubmit}>提交</Button>
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
})(OperationRecord)