import React, { Component } from 'react';
import { connect } from 'dva';

import styles from './index.less';

interface IndexState {
  currentPageKey: string;
}

class Index extends Component<{}, IndexState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentPageKey: 'medical-record',
    };
  }

  handleHighRisk = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'pregnancy/changeHighrisk',
      payload: true,
    });
  };

  renderInfo = () => {
    const { pregnancyData } = this.props;
    if (pregnancyData) {
      return (
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <div className={styles.item}>
              <span className={styles.label}>姓名：</span>
              <span className={styles.value}>{pregnancyData.name}</span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>年龄：</span>
              <span className={styles.value}>{pregnancyData.age}</span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>孕周：</span>
              <span className={styles.value}>{pregnancyData.gestationalWeek || '--'}</span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>预产期-日期：</span>
              <span className={styles.value}>{pregnancyData.edd || '-- -- --'}</span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>预产期-B超：</span>
              <span className={styles.value}>{pregnancyData.sureEdd || '-- -- --'}</span>
            </div>
            <div className={styles.item}>
              <span className={styles.label}>产检编号：</span>
              <span className={styles.value}>{pregnancyData.checkupNO || '--'}</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.highrisk} onClick={this.handleHighRisk}>
              <div className={styles.top}>
                <span className={pregnancyData.highrisk === 5 ? styles.level5 :
                  pregnancyData.highrisk === 4 ? styles.level4 :
                  pregnancyData.highrisk === 3 ? styles.level3 :
                  pregnancyData.highrisk === 2 ? styles.level2 : styles.level1
                }>
                  {pregnancyData.highrisk ? pregnancyData.highrisk : 1}
                </span>
                <div className={pregnancyData.highrisk ? styles.hasInfectin : styles.noInfectin}>传染病：无</div>
              </div>
              <div className={styles.bottom}>
                <span>高危因素：</span>
                <div>{pregnancyData.highriskNote ? pregnancyData.highriskNote : '无'}</div>
              </div>
            </div>
            <div className={styles.signs}>
              <div className={styles.top} style={{ background: '#449EC4' }}>
                疤
              </div>
              <div className={styles.bottom} style={{ background: '#AF7D81' }}>
                栓
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  render() {
    return <div>{this.renderInfo()}</div>;
  }
}

const mapStateToProps = ({ pregnancy }) => {
  return { ...pregnancy };
};

export default connect(mapStateToProps)(Index);
