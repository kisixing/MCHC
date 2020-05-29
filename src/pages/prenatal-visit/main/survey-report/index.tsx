import React, { Component } from 'react';
import { Row, Col, Button, Table, Collapse, Modal, Input, Select } from "antd";
import request from '@/utils/request';
import { getPageQuery } from '@/utils/utils';

import styles from './index.less';

interface IndexState {
  isShowModal: boolean,
  reportList: any,
  detailData: any,
  repResult: string,
  repRemarks: string,
  repSign: string,
  repId: string,
  repAmy: boolean,
}

export default class Index extends Component<{}, IndexState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      reportList: [],
      detailData: {},
      repResult: '2',
      repRemarks: '',
      repSign: '',
      repId: '',
      repAmy: true,
    }
  }

  // componentDidMount() {
  //   service.jianyan.getLisReport().then(res => this.setState({ reportList: res.object }));
  // }

  renderLeft() {
    const {reportList} = this.state;

    const getDetail = (id, bool) => {
      service.jianyan.getLisDetail(id, bool).then(res => this.setState({ detailData: res.object }));

      service.jianyan.checkReport("已看", "", "", id, bool).then(res => {
        service.jianyan.getLisReport().then(res => this.setState({ reportList: res.object }));
      });

      if(bool) {
        this.setState({ repAmy: true, repId: id })
      } else {
        this.setState({ repAmy: false, repId: id })
      }
    }

    return (
      <div className={styles.jianyanLeft}>
        <Collapse defaultActiveKey={["0", "1", "2"]}>
          {
            reportList&&reportList.map(item => (
              <Collapse.Panel header={item.groupTitle} key={item.id}>
                {
                  item.data.map(subItem => (
                    <div className="left-item" onClick={() => {subItem.isAmy ? getDetail(subItem.amyId, true) : getDetail(subItem.sampleno)}}>
                      {!subItem.state ? <span className="left-state">新</span> : null}
                      <p className="left-title">{subItem.title}</p>
                      {/* <Button className={subItem.state==="2" ? "left-btn normal" : "left-btn"} size="small">
                        {subItem.state===null ? '待审阅' : (subItem.state==='1' ? '已看' : (subItem.state==='2' ? '正常' : '异常'))}
                      </Button> */}
                      {subItem.isAmy ? <span className="left-lable">外院</span> : null}
                    </div>
                  ))
                }
              </Collapse.Panel>
            ))
          }
        </Collapse>
      </div>
    )
  }

  renderRight() {
    const { isShowModal, detailData, repAmy} = this.state;

    const renderTable = () => {
      const columns = [
        { title: '检验项目', dataIndex: 'item', key: 'item' },
        { title: '结果', dataIndex: 'result', key: 'result' },
        { title: '单位', dataIndex: 'unit', key: 'unit' },
        { title: '参考值', dataIndex: 'reference', key: 'reference' },
        { title: '状态', dataIndex: 'status', key: 'status' },
      ];

      const setClassName = (record, index) => {
          if(record.status=="↑" || record.status=="异常" || record.status=="↓") {
            return 'redClass';
          }
          return '';
        }

      return (
        <div className="right-wrapper">
          <div className="right-top">
            <p className="right-title"><span className="right-words">{detailData.title} </span>检验报告单</p>
            {/* {
              !isShowModal ?
              <Button className="right-btn" type="primary" size="small" onClick={() => this.setState({isShowModal: true})}>审阅</Button>
              : null
            } */}
            <div className="right-doctor">首阅医生：{detailData.firstChecker}</div>
          </div>
          <ul className="right-msg">
            <li className="msg-item">检验单号: {detailData.sampleno}</li>
            <li className="msg-item">送检: {detailData.sender}</li>
            <li className="msg-item">姓名: {detailData.name}</li>
            <li className="msg-item">性别: {detailData.sex}</li>
            <li className="msg-item">年龄: {detailData.age}</li>
            <li className="msg-item">标本部位: {detailData.specimen}</li>
          </ul>
          <div>
            { !repAmy
                ? <Table columns={columns} dataSource={detailData.lisDetails} pagination={false} rowClassName={(record, index) => setClassName(record, index)} />
                : null
            }
          </div>
        </div>
      )
    }

    return (
      <div className="jianyan-right ant-col-18">
        {renderTable()}
      </div>
    )
  }

  render() {
    return (
      <div className={styles.jianyan}>
        {this.renderLeft()}
        {this.renderRight()}
      </div>
    )
  }
}
