import React, { Component, ReactNode } from 'react';
import { Table, Tree } from 'antd';
import SiderMenu from '../components/menu/index';
import request from '@/utils/request';

import { PrenatalDiagnosisModelState } from '../main/model';

import { connect } from 'dva';
import { generateTreeData } from '../utils';

import styles from './index.less'

interface InspectionProp {
  patient: any
}

interface InspectionState {
  data: any,
  labExamRecordList: Array<any>,
  treeData: Array<any>,
  currentTreeKeys: Array<any>,
  menuWidth: number,
  patient: any
}

const columns = [
  {
    title: '项目编号',
    dataIndex: 'itemNO',
    align: 'center'
  },
  {
    title: '项目',
    dataIndex: 'itemName',
    align: 'center'
  },
  {
    title: '结果',
    dataIndex: 'result',
    align: 'center'
  },
  {
    title: '单位',
    dataIndex: 'unit',
    align: 'center'
  },
  {
    title: '参考',
    dataIndex: 'limit',
    align: 'center'
  },
  {
    title: '状态',
    dataIndex: 'status',
    align: 'center'
  },
]

const URL = "/lab-exams"

class Inspection extends Component<InspectionProp, InspectionState>{

  constructor(props: InspectionProp) {
    super(props);
    this.state = {
      patient: {},
      data: {},
      labExamRecordList: [],
      treeData: [],
      currentTreeKeys: [],
      menuWidth: 0
    }
  }

  componentDidMount() {
    const { patient = {} } = this.props;
    this.setState({ patient }, () => {
      // const prenatalPatientId = this.state.patient.id;
      this.getLabExam(undefined, "");
    })
  }

  componentDidUpdate(_prevProps: InspectionProp, prevState: InspectionState) {
    if (this.state.patient.id !== this.props.patient.id) {
      const { patient = {} } = this.props;
      this.setState({ patient }, () => {
        // const prenatalPatientId = this.state.patient.id;
        this.getLabExam(undefined, "");
      })
    }
    // 生成树形结构的数据
    const { labExamRecordList, treeData } = this.state;
    if ((labExamRecordList.length !== 0 && treeData.length === 0) || this.state.patient.id !== this.props.patient.id) {
      const newTreeData = generateTreeData(
        labExamRecordList,
        { key: "reportDate", render: (text: string, _record: any) => text.substring(0, 10) },
        { key: "id", render: (_text: string, record: any) => record.suitName },
      )
      this.setState({ treeData: newTreeData });
    }
    if (prevState.currentTreeKeys !== this.state.currentTreeKeys) {
      const i = labExamRecordList.findIndex(v => v.id === this.state.currentTreeKeys[0]);
      if (i !== -1) {
        this.setState({ data: labExamRecordList[i] });
      }
    }
  }

  getLabExam = (outpatientNO: string = "8000683303", id: number | string) => {
    request(`${URL}?outpatientNO.equals=${outpatientNO}&id=${id}`, {
      method: "GET"
    }).then(res => {
      if (id) {
        this.setState({ data: res[0] });
      } else {
        this.setState({ labExamRecordList: res })
      }
    });
  }


  renderHeader = (data: any = {}): ReactNode => {
    return (
      <div className={styles.header}>
        <div className={styles.title}>
          <span>{data.suitName}</span>
        </div>
        <div className={styles.doctor}>
          <span>首阅医生:{data.reportDate}</span>
        </div>
        <div className={styles.patient}>
          <div><span>检验单号: {data.profileId}</span></div>
          <div><span>送检：{data.requestDate}</span></div>
          <div><span>姓名:{data.name}</span></div>
          <div><span>姓别：女</span></div>
          <div><span>年龄：{data.age}</span></div>
          <div><span>标本部位：{data.diagnosis}</span></div>
        </div>
      </div>
    )
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
    const { treeData, currentTreeKeys, data } = this.state;
    return (
      <div className={styles.inspection}>
        <SiderMenu
          getSiderMenuWidth={this.setMenuWidth}
        >
          <Tree
            treeData={treeData}
            onSelect={this.handleTreeSelect}
            selectedKeys={currentTreeKeys}
          />
        </SiderMenu>
        {currentTreeKeys.length !== 0 ? (
          <div
            className={styles.form}
            style={{ marginLeft: this.state.menuWidth }}
          >
            {this.renderHeader(data)}
            <Table
              bordered
              className={styles['inspection-table']}
              columns={columns}
              dataSource={data.labExamResults}
              rowKey={(record: any) => record.id}
            />
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
})(Inspection)