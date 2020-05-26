import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';

import styles from './index.less';

interface IndexState {
  currentPageKey: string,
}

class Index extends Component<{},IndexState>{

  constructor(props: any) {
    super(props);
    this.state = {
      currentPageKey: "medical-record",
    }
  }

  handleHighRisk = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'pregnancy/changeHighrisk',
      payload: true
    })
  }

  renderInfo = () => {
    const { pregnancyData } = this.props;
    if(pregnancyData){
      return (
        <div className={styles['header-info']}>
          <div className={styles['user-info']}>
            <div>
              <span>姓名:</span><strong>{pregnancyData.name}</strong>
            </div>
            <div>
              <span>年龄:</span><strong>{pregnancyData.age}</strong>
            </div>
            <div>
              <span>孕周:</span><strong>{pregnancyData.gestationalWeek}</strong>
            </div>
            <div>
              <span>预产期-日期:</span><strong>{pregnancyData.edd}</strong>
            </div>
            <div>
              <span>预产期-B超:</span><strong>{pregnancyData.sureEdd}</strong>
            </div>
            <div>
              <span>产检编号:</span><strong>{pregnancyData.checkupNO}</strong>
            </div>
          </div>
          <div className={styles['header-btnList']}>
            <div className={styles["btnList-left"]} onClick={this.handleHighRisk}>
              <div className={styles["danger-btn-wrapper"]}>
                <Button.Group className={styles['btnList-btn-group']}>
                  <Button className={styles["level-btn"]}>
                    {pregnancyData.highrisk ? pregnancyData.highrisk : 1}
                  </Button>
                  <Button className={styles["danger-btn-infectin"]}>
                    传染病：无
                  </Button>
                </Button.Group>
              </div>
              <div className={styles["high-risk-wrapper"]}>
                <Button.Group className={styles['btnList-btn-group']}>
                  <Button className={styles["high-risk-btn"]}>高危因素：</Button>
                  <Button className={styles["high-risk-content"]} title={pregnancyData.highriskNote}>{pregnancyData.highriskNote ? pregnancyData.highriskNote : '无'}</Button>
                </Button.Group>
              </div>
            </div>
            <div className={styles["btnList-right"]}>
              <Button className={styles["danger-btn-trial"]}>疤</Button>
              <Button className={styles["danger-btn-phar"]}>栓</Button>
            </div>
          </div>
        </div>
      )
    }
    return null;
  }

  render() {
    return (
      <div>
        { this.renderInfo() }
      </div>
    )
  }
}

const mapStateToProps = ({ pregnancy }) => {
  return { ...pregnancy };
};

export default connect(
  mapStateToProps
)(Index);

