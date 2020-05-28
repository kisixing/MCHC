import React from 'react';
import { Button, message, Tree } from 'antd';
import MyForm from '@/components/MyForm/index';

import { Dispatch } from 'redux';
import { PrenatalDiagnosisModelState } from '../../main/model';

import moment from 'moment';
import { connect } from 'dva';
import { getFormData } from '@/components/MyForm/utils';
import { generateTreeData } from '../../utils';

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
  showMenu: boolean
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

class OperationRecord extends React.Component<OperationRecordProp, OperationRecordState>{
  constructor(props: any) {
    super(props);
    this.state = {
      formHandler: {},
      data: {
        id: "", // 病历id
        operationType: 1,
        // operationName: "羊膜腔穿刺"
      },
      patient: {},
      operationRecordList: [],
      treeData: [],
      currentTreeKeys: [],
      showMenu: true
    }
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
    if (operationRecordList.length !== 0 && treeData.length === 0) {
      const newTreeData = generateTreeData(
        operationRecordList,
        { key: "operationDate", render: (text: string, _record: any) => text },
        { key: "id", render: (_text: string, record: any) =>  record.operationName},
      )
      this.setState({ treeData: newTreeData });
    }
    if (prevState.currentTreeKeys !== this.state.currentTreeKeys) {
      this.getPdOperations(this.state.patient.id, this.state.currentTreeKeys[0]);
    }
  }

  // 获取病历
  getPdOperations = (prenatalPatientId: number | string, id: number|string) => {
    if(Number(id) < 0){
      this.setState({data: {
        id,
        operationType: 1
      }});
      return;
    }
    request(`${URL}?prenatalPatientId.equals=${prenatalPatientId}&id.equals=${id}`, {
      method: "GET"
    }).then((res: any) => {
      if (res.length !== 0) {
        if(id){
          this.setState({ data: {}}, () => {
            this.setState({ data: res[0] })
          })
        }else{
          this.setState({operationRecordList: res})
        }
      }
    });
  }

  handleTreeSelect = (key: Array<number | string>, { selected, node }: any) => {
    if(selected && !node.children){
      this.setState({ currentTreeKeys: key});
    }
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
        const [method, info] = formatData.id > 0 ? ["PUT", "修改成功"] : ["POST", "成功新增病历"];
        if(formatData.id < 0){
          formatData.id = "";
        }
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


  render() {
    const { data, treeData, currentTreeKeys,showMenu } = this.state;
    let { operationType } = data;
    if (operationType === null) { operationType = 1; }
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
            style={{width: ""}}
          >
            <div>
             <Button
                size="small"
                onClick={this.newRecord}
              >新建病历</Button>
            </div>
            <Tree
              treeData={treeData}
              defaultExpandAll
              onSelect={this.handleTreeSelect}
              selectedKeys={currentTreeKeys}
            />
          </div>
          <div className={styles.btn}>
            <Button
              onClick={() => this.setState({showMenu: !showMenu})}
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
        
      </div>
    )
  }
}

export default connect(({ prenatalDiagnosis }: { prenatalDiagnosis: PrenatalDiagnosisModelState }) => {
  return {
    patient: prenatalDiagnosis.patient
  }
})(OperationRecord)