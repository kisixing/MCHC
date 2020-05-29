import React, { Component, ReactNode } from 'react';
import { Table, Button } from 'antd';
import data from './data';

import styles from './index.less'

interface InspectionProp {

}

interface InspectionState {

}

const columns = [
  {
    title: '项目',
    dataIndex: 'item',
    key: 'item',
    align: 'center'
  },
  {
    title: '结果',
    dataIndex: 'result',
    key: 'result',
    align: 'center'
  },
  {
    title: '单位',
    dataIndex: 'unit',
    key: 'unit',
    align: 'center'
  },
  {
    title: '参考',
    dataIndex: 'reference',
    key: 'reference',
    align: 'center'
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    align: 'center'
  },
]

export default class Inspection extends Component<InspectionProp, InspectionState>{

  state = {
    showMenu: true
  }

  renderHeader = (data: any): ReactNode => {
    return (
      <div className={styles.header}>
        <div className={styles.title}>
          <span>血细胞五分类[CBC+DIFF] 检验报告单</span>
        </div>
        <div className={styles.doctor}>
          <span>首阅医生:xxx</span>
        </div>
        <div className={styles.patient}>
          <div><span>检验单号: 16296888601143</span></div>
          <div><span>送检：谭磊3</span></div>
          <div><span>姓名:周灿</span></div>
          <div><span>姓别：女</span></div>
          <div><span>年龄：33</span></div>
          <div><span>标本部位：静脉血</span></div>
        </div>
      </div>
    )
  }

  render() {
    const { showMenu } = this.state;
    return (
      <div className={styles.inspection}>
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
              <span>暂无信息</span>
            </div>
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
          {this.renderHeader(data)}
          <Table
            bordered
            className={styles['inspection-table']}
            columns={columns}
            dataSource={data.inspections}
          />
        </div>
      </div>
    )
  }
}