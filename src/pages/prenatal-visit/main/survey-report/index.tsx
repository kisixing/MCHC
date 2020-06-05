import React, { Component } from 'react';
import { Row, Col, Button, Table, Collapse, Modal, Input, Select } from "antd";
import { connect } from 'dva';
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

class Index extends Component<{}, IndexState> {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      reportList: null,
      detailData: null,
      repResult: '2',
      repRemarks: '',
      repSign: '',
      repId: '',
      repAmy: true,
    }
  }

  componentDidMount() {
    const { pregnancyData } = this.props;
    request(`/lab-exams?outpatientNO.equals=${pregnancyData.outpatientNO}&id=${pregnancyData.id}`, {
      method: "GET"
    }).then(res => {
      this.setState({
        reportList: res
      })
    });
  }

  renderLeft() {
    const { reportList } = this.state;

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

    const handleClick = (item) => {
      if (item) {
        this.setState({
          detailData: item
        })
      }
    }

    return (
      <div className="jianyan-left">
        <Collapse defaultActiveKey={["0", "1", "2"]}>
          {
            reportList && reportList.map(item => (
              <Collapse.Panel header={item.reportDate} key={item.id}>
                {/* {
                  item.data.map(subItem => (
                    <div className="left-item" onClick={() => {subItem.isAmy ? getDetail(subItem.amyId, true) : getDetail(subItem.sampleno)}}>
                      {!subItem.state ? <span className="left-state">新</span> : null}
                      <p className="left-title">{subItem.title}</p>
                      {subItem.isAmy ? <span className="left-lable">外院</span> : null}
                    </div>
                  ))
                } */}
                <div onClick={() => handleClick(item)}>{item.suitName}</div>
              </Collapse.Panel>
            ))
          }
        </Collapse>
      </div>
    )
  }

  renderRight() {
    const { isShowModal, detailData, repAmy, reportList} = this.state;

    const renderTable = () => {
      const columns = [
        { title: '检验项目', dataIndex: 'itemName', key: 'itemName' },
        { title: '结果', dataIndex: 'result', key: 'result' },
        { title: '单位', dataIndex: 'unit', key: 'unit' },
        { title: '参考值', dataIndex: 'limit', key: 'limit' },
        { title: '状态', dataIndex: 'status', key: 'status' },
      ];

      const setClassName = (record, index) => {
          if(record.status=="↑" || record.status=="异常" || record.status=="↓") {
            return 'redClass';
          }
          return '';
        }

        console.log(detailData, '222')
      return (
        detailData?
          <div className="right-wrapper">
            <div className="right-top">
              <p className="right-title"><span className="right-words">{detailData.suitName} </span>检验报告单</p>
              <div className="right-doctor">首阅医生：{detailData.reportDoctorName}</div>
            </div>
            <ul className="right-msg">
              <li className="msg-item">检验单号: {detailData.profileId}</li>
              <li className="msg-item">送检: {detailData.instrument}</li>
              <li className="msg-item">姓名: {detailData.name}</li>
              <li className="msg-item">性别: {detailData.sex}</li>
              <li className="msg-item">年龄: {detailData.age}</li>
              <li className="msg-item">标本部位: {detailData.diagnosis}</li>
            </ul>
            <div>
                <Table columns={columns} dataSource={detailData.labExamResults} pagination={false} rowClassName={(record, index) => setClassName(record, index)} />
                {/* { !repAmy
                  ?  */}
              {/* //     : null
              // } */}
            </div>
          </div>
        : null
      )
    }

    return (
      <div className="jianyan-right">
        {renderTable()}
      </div>
    )
  }

  render() {
    return (
      <div className={styles.jianyan}>
        <Row>
          <Col span={6}>
            {this.renderLeft()}
          </Col>
          <Col span={1}></Col>
          <Col span={17}>
            {this.renderRight()}
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ pregnancy }) => {
  return { ...pregnancy };
};

export default connect(mapStateToProps)(Index);

