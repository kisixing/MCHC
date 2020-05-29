import React, { Component } from 'react';
import { Row, Col, Button, Table, Modal } from "antd";
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

import styles from './index.less';

interface IndexState {
  isShowModal: boolean,
  tableData: any,
  pdfPath: string
}

export default class Index extends Component<{}, IndexState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      tableData: [],
      pdfPath: ''
    }
  }

  // componentDidMount() {
  //   service.yingxiang.getPacsData().then(res => {
  //     this.setState({tableData: res.object})
  //   })
  // }

  renderTable() {
    const {tableData} = this.state;
    const title = () => '影像检查报告';
    const handleBtnClick = (text, record) => {
      const pdfPath = service.getUrl(record.pdfPath)
      // const pdfPath = `https://10.168.199.138:1808/HBackend/getReportPdf.go?docUniqueid=${record.docUniqueid}&docType=XDS.UR2.USBG`;
      this.setState({pdfPath}, () => {
        this.setState({isShowModal: true})
      })
    }

    const columns = [
      { title: '标题', dataIndex: 'title', key: 'title' },
      { title: '检查日期', dataIndex: 'sendDate', key: 'sendDate',  render: (text, record) => text.substr(0, 10)},
      { title: '报告医生', dataIndex: 'reportDoctor', key: 'reportDoctor', width: 120 },
      { title: '诊断', dataIndex: 'diagnosis', key: 'diagnosis', width: 350 },
      { title: '结论', dataIndex: 'result', key: 'result', width: 400 },
      { title: '查看报告', key: 'operation', width: 120, render: (text, record) => <Button type="primary" onClick={() => handleBtnClick(text, record)}>查看</Button> },
    ];

    return (
      <Table title={title} columns={columns} dataSource={tableData} pagination={false}/>
    )
  }

  renderModal() {
    const { isShowModal, pdfPath } = this.state;
    const handleClick = () => {
      this.setState({
        isShowModal: false,
        pdfPath: ''
      })
    }
    return (
      <Modal width="60%" footer={null} visible={isShowModal} title="影像检查报告"
             onOk={() => handleClick()} onCancel={() => handleClick()}>
        <embed src={pdfPath} width="100%" height="1200" />
      </Modal>
    )
  }

  render() {
    return (
      <div className={styles.yingxiang}>
        <Row>
          <Col span={18}>
            {this.renderTable()}
            {this.renderModal()}
          </Col>
        </Row>
      </div>
    )
  }
}
