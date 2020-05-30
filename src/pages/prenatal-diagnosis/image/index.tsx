import React, { Component, ReactNode } from 'react';
import { Table } from 'antd';

import { Dispatch } from 'redux';
import { PrenatalDiagnosisModelState } from '../main/model';

import { ModalIframeView } from '@/components/PDFPreview';

import { openSpin, closeSpin } from '../utils/index';
import request from '@/utils/request';
import { connect } from 'dva';

import styles from './index.less'

interface ImageRecordProps {
  patient: any,
  dispatch: Dispatch
}

interface ImageRecordState {
  data: any,
  imageRecord: Array<any>,
  patient: any
}

const URL = "/image-exams"

class ImageRecord extends Component<ImageRecordProps, ImageRecordState>{

  constructor(props: ImageRecordProps) {
    super(props);
    this.state = {
      patient: {},
      data: {},
      imageRecord: [],
    }
  }

  componentDidMount() {
    const { patient = {} } = this.props;
    this.setState({ patient }, () => {
      // const prenatalPatientId = this.state.patient.id;
      this.getImageRecord(undefined, "");
    })
  }

  componentDidUpdate(_prevProps: ImageRecordProps, prevState: ImageRecordState) {
    if (this.state.patient.id !== this.props.patient.id) {
      const { patient = {} } = this.props;
      this.setState({ patient }, () => {
        // const prenatalPatientId = this.state.patient.id;
        this.getImageRecord(undefined, "");
      })
    }
  }

  getImageRecord = (outpatientNO: string = "8000683303", id: number | string) => {
    this.props.dispatch(openSpin);
    request(`${URL}?outpatientNO.equals=${outpatientNO}&id=${id}`, {
      method: "GET"
    }).then(res => {
      this.props.dispatch(closeSpin);
      if (id) {
        this.setState({ data: res[0] });
      } else {
        this.setState({ imageRecord: res })
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

  // 打开影像报告
  openImageReport = (id: number|string) => {
    console.log(id);
  }

  render() {
    const { imageRecord = [] } = this.state;
    const tableColumns = [
      { title: '标题', dataIndex: 'title', align: 'center' },
      {
        title: '报告日期', dataIndex: 'reportDate', align: 'center',
        render: (text: string) => text.substring(0, 10)
      },
      { title: '报告医生', dataIndex: 'reportDoctorName', align: 'center' },
      { title: '诊断', dataIndex: 'result', align: 'center' },
      { title: '查看报告', key: "openPDF", align: 'center',
        render: (_text:any, record: any) => (
          <ModalIframeView
            file="./compressed.tracemonkey-pldi-09.pdf"
          >
            查看报告
          </ModalIframeView>
        )
      },
    ]

    return (
      <div className={styles['image-record']}>
        <div className={styles.form}>
          <Table
            bordered
            columns={tableColumns}
            dataSource={imageRecord}
            rowKey={(record: any) => record.id}
          />
        </div>
      </div>
    )
  }
}

export default connect(({ prenatalDiagnosis }: { prenatalDiagnosis: PrenatalDiagnosisModelState }) => {
  return {
    patient: prenatalDiagnosis.patient
  }
})(ImageRecord)